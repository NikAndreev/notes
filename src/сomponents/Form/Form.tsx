import React, { FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import notesStore from "../../stores/notesStore";
import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./Form.module.scss";

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
    <form className={styles.form} onSubmit={onSubmit}>
      {showInput && (
        <Input
          className={classNames(styles.form__input)}
          isError={isError}
          autoFocus
          value={title}
          onChange={setTitle}
        />
      )}
      <Button type="submit" theme="blue" className={styles.form__add}>
        Добавить заметку
      </Button>
      <Button
        type="button"
        theme="red"
        className={styles.form__delete}
        onClick={deleteAllNotes}>
        Удалить всё
      </Button>
    </form>
  );
});

export default Form;
