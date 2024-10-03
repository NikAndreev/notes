import { observer } from "mobx-react-lite";
import classNames from "classnames";

import notesStore from "../stores/notesStore";

const Note = observer(({ note }) => {
  const { completeNote, moveNote, deleteNote } = notesStore;

  return (
    <li className="to-do__item">
      <div
        className={classNames("to-do__item-title", {
          completed: note.completed,
        })}
        onClick={() => completeNote(note)}>
        {note.title}
      </div>
      <span className="to-do__item-buttons">
        <button
          className="to-do__item-control arrow"
          onClick={() => moveNote(note, "up")}>
          🠕
        </button>
        <button
          className="to-do__item-control arrow"
          onClick={() => moveNote(note, "down")}>
          🠗
        </button>
        <button
          type="button"
          className="to-do__item-control delete"
          onClick={() => deleteNote(note.id)}>
          X
        </button>
      </span>
    </li>
  );
});

export default Note;
