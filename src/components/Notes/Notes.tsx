import { observer } from "mobx-react-lite";
import notesStore from "../../stores/notesStore";
import Note from "../Note";

import styles from "./Notes.module.scss";

const Notes = observer(() => {
  const { filteredAndSearchedNotes } = notesStore;

  if (!filteredAndSearchedNotes.length) {
    return <div className={styles.empty}>Заметок пока нет.</div>;
  }

  return (
    <ul className={styles.notes}>
      {filteredAndSearchedNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
});

export default Notes;
