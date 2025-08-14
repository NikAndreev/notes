import React, { FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import notesStore from "../../stores/notesStore";
import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./Form.module.scss";

const Form = observer(() => {
  const { creation, createNote, deleteAllNotes } = notesStore;

  const [title, setTitle] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (title.length < 3) {
      setValidationError(true);
      return;
    }

    setValidationError(false);

    try {
      await createNote(title);

      setServerError(false);
      setTitle("");
      setShowInput(false);
    } catch (e) {
      console.log(e);

      setServerError(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {serverError && (
        <div className={styles.form__error}>Ошибка от сервера</div>
      )}
      {validationError && (
        <div className={styles.form__error}>Минимальная длина — 3 символа</div>
      )}
      <div className={styles.form__row}>
        {showInput && (
          <Input
            className={classNames(styles.form__input)}
            placeholder="Название заметки..."
            autoFocus
            value={title}
            disabled={creation}
            onChange={setTitle}
          />
        )}
        <Button
          type="submit"
          theme="blue"
          disabled={creation}
          className={styles.form__add}>
          {creation ? "Сохранение..." : "Добавить заметку"}
        </Button>
        <Button
          type="button"
          theme="red"
          className={styles.form__delete}
          onClick={deleteAllNotes}>
          Удалить всё
        </Button>
      </div>
    </form>
  );
});

export default Form;
