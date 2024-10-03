import { makeAutoObservable, reaction } from "mobx";
import NotesService from "../services/NotesService";

class NotesStore {
  notes = [];
  loading = true;
  filter = "";
  search = "";

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
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  };

  createNote = (title) => {
    this.notes.push({
      title,
      id: Date.now(),
      completed: false,
    });
  };

  deleteNote = (id) => {
    this.notes = this.notes.filter((note) => note.id !== id);
  };

  deleteAllNotes = () => {
    this.notes = [];
  };

  completeNote = (note) => {
    note.completed = !note.completed;
  };

  moveNote = (noteA, direction) => {
    const noteAIndex = this.notes.findIndex((note) => note.id === noteA.id);

    const shift = direction === "up" ? -1 : 1;

    const noteB = this.notes[noteAIndex + shift];

    this.notes[noteAIndex + shift] = noteA;

    this.notes[noteAIndex] = noteB;
  };

  setFilter = (filter) => {
    this.filter = filter;
  };

  setSearch = (search) => {
    this.search = search;
  };
}

const notesStore = new NotesStore();

reaction(
  () => notesStore.filter,
  (filter) => localStorage.setItem("filter", JSON.stringify(filter))
);

export default notesStore;
