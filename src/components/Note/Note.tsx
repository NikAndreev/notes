import classNames from "classnames";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import notesStore from "../../stores/notesStore";

import type { NoteProps } from "./types";

import styles from "./Note.module.scss";

const Note = observer(({ note }: NoteProps) => {
  const { completeNote, moveNote, deleteNote } = notesStore;

  return (
    <motion.li
      className={styles.note}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      layout>
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
          onClick={() => moveNote(note, "up")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
        <button
          className={classNames(
            styles.note__control,
            styles.arrow,
            styles.down
          )}
          onClick={() => moveNote(note, "down")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
          </svg>
        </button>
        <button
          type="button"
          className={classNames(styles.note__control, styles.delete)}
          onClick={() => deleteNote(note.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </span>
    </motion.li>
  );
});

export default Note;
