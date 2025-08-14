import classNames from "classnames";
import { observer } from "mobx-react-lite";
import notesStore from "../../stores/notesStore";

import type { NoteProps } from "./types";

import styles from "./Note.module.scss";

const Note = observer(({ note }: NoteProps) => {
  const { completeNote, moveNote, deleteNote } = notesStore;

  return (
    <li className={styles.note}>
      <div
        className={classNames(styles.note__title, {
          [styles.completed]: note.completed,
        })}
        onClick={() => completeNote(note)}>
        {note.title}
      </div>
      <span className={styles.note__controls}>
        <button
          className={classNames(styles.note__control, styles.arrow, styles.up)}
          onClick={() => moveNote(note, "up")}></button>
        <button
          className={classNames(
            styles.note__control,
            styles.arrow,
            styles.down
          )}
          onClick={() => moveNote(note, "down")}></button>
        <button
          type="button"
          className={classNames(styles.note__control, styles.delete)}
          onClick={() => deleteNote(note.id)}></button>
      </span>
    </li>
  );
});

export default Note;
