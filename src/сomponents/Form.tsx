import React, { FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import notesStore from "../stores/notesStore";

const Form = observer(() => {
  const { createNote, deleteAllNotes } = notesStore;

  const [title, setTitle] = useState("");

  const [isError, setIsError] = useState(false);

  const [showInput, setShowInput] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (!title) {
      setIsError(true);
      return;
    }

    setIsError(false);

    setShowInput(false);

    setTitle("");

    createNote(title);
  };

  return (
    <form className="to-do__form" onSubmit={onSubmit}>
      {showInput && (
        <input
          type="text"
          className={classNames("input", "to-do__input", {
            error: isError,
          })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      )}
      <button type="submit" className="btn btn--blue to-do__add">
        Добавить заметку
      </button>
      <button
        type="button"
        className="btn btn--red to-do__delete"
        onClick={deleteAllNotes}>
        Удалить всё
      </button>
    </form>
  );
});

export default Form;
