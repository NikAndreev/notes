import Note from "./Note";
import { observer } from "mobx-react-lite";

import notesStore from "../stores/notesStore";

const Notes = observer(() => {
  const { filteredAndSearchedNotes } = notesStore;

  if (!filteredAndSearchedNotes.length) {
    return <div className="to-do__message">Заметок пока нет.</div>;
  }

  return (
    <ul className="to-do__list">
      {filteredAndSearchedNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
});

export default Notes;
