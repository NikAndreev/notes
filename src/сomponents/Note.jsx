import { observer } from "mobx-react-lite";

import notesStore from "../stores/notesStore";

const Note = observer(({ note }) => {
  const { completeNote, moveNote, deleteNote } = notesStore;

  return (
    <li className="to-do__item">
      <label className="checkbox to-do__item-checkbox">
        <input
          type="checkbox"
          className="checkbox__native"
          checked={note.completed}
          onChange={() => completeNote(note)}
        />
        <button type="button" className="checkbox__custom"></button>
        <span className="checkbox__text">{note.title}</span>
      </label>
      <span className="to-do__item-arrows">
        <button
          className="to-do__item-arrow"
          onClick={() => moveNote(note, "up")}>
          🠕
        </button>
        <button
          className="to-do__item-arrow"
          onClick={() => moveNote(note, "down")}>
          🠗
        </button>
      </span>
      <button
        type="button"
        className="to-do__item-delete"
        onClick={() => deleteNote(note.id)}>
        Удалить
      </button>
    </li>
  );
});

export default Note;
