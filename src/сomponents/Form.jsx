import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import notesStore from "../stores/notesStore";

const Form = observer(() => {
  const { createNote, deleteAllNotes } = notesStore;

  const [title, setTitle] = useState("");

  const [isError, setIsError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setIsError(true);
      return;
    }

    setIsError(false);

    createNote(title);

    setTitle("");
  };

  return (
    <form className="to-do__form" onSubmit={onSubmit}>
      <input
        type="text"
        className={isError ? "input to-do__input error" : "input to-do__input"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn--blue to-do__add">
        Добавить заметку
      </button>
      <button
        type="button"
        className="btn btn--red to-do__delete"
        onClick={deleteAllNotes}>
        Очистить список
      </button>
    </form>
  );
});

export default Form;
