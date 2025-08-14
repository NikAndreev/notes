import { makeAutoObservable, reaction } from "mobx";
import NotesService from "../services/NotesService";

import type { INote } from "../types/notes";

class NotesStore {
  notes: INote[] = [];
  loading = true;
  filter = "";
  search = "";
  creation = false;

  constructor() {
    makeAutoObservable(this);

    const LSFilter = localStorage.getItem("filter");

    if (LSFilter) {
      this.setFilter(JSON.parse(LSFilter));
    }
  }

  get filteredNotes() {
    switch (this.filter) {
      case "completed":
        return this.notes.filter((note) => note.completed);
      case "uncompleted":
        return this.notes.filter((note) => !note.completed);
      default:
        return this.notes;
    }
  }

  get filteredAndSearchedNotes() {
    return this.filteredNotes.filter((note) =>
      note.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  getNotes = async () => {
    try {
      const result = await NotesService.getAll();

      this.notes = result.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  };

  createNote = async (title: string) => {
    this.creation = true;

    try {
      const id = Date.now();

      const result = await NotesService.create({
        id,
        title,
        completed: false,
      });

      this.notes.push({ ...result.data, id });
    } catch (error) {
      throw error;
    } finally {
      this.creation = false;
    }
  };

  deleteNote = (id: number) => {
    this.notes = this.notes.filter((note) => note.id !== id);
  };

  deleteAllNotes = () => {
    this.notes = [];
  };

  completeNote = (note: INote) => {
    note.completed = !note.completed;
  };

  moveNote = (noteA: INote, direction: string) => {
    const shift = direction === "up" ? -1 : 1;

    const noteB =
      this.filteredAndSearchedNotes[
        this.filteredAndSearchedNotes.indexOf(noteA) + shift
      ];

    const indexA = this.notes.indexOf(noteA);
    const indexB = this.notes.indexOf(noteB);

    [this.notes[indexA], this.notes[indexB]] = [
      this.notes[indexB],
      this.notes[indexA],
    ];
  };

  setFilter = (filter: string) => {
    this.filter = filter;
  };

  setSearch = (search: string) => {
    this.search = search;
  };
}

const notesStore = new NotesStore();

reaction(
  () => notesStore.filter,
  (filter) => localStorage.setItem("filter", JSON.stringify(filter))
);

export default notesStore;
