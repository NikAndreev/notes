import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemAction, clearItemsAction } from "../store/reducers/items";

const Form = ({ items }) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState({
    title: "",
  });

  const [isError, setIsError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (item.title) {
      setIsError(false);

      dispatch(
        addItemAction({
          ...item,
          id: Date.now(),
          isCompleted: false,
          order: items.length ? items[items.length - 1].order + 1 : 0,
        })
      );

      setItem({
        title: "",
      });
    } else {
      setIsError(true);
    }
  };

  const onСlear = () => {
    if (window.confirm("Вы уверены, что хотите очистить список?")) {
      dispatch(clearItemsAction());
    }
  };

  return (
    <form className="to-do__form" onSubmit={onSubmit}>
      <input
        type="text"
        className={isError ? "input to-do__input error" : "input to-do__input"}
        value={item.title}
        onChange={(e) => setItem({ ...item, title: e.target.value })}
      />
      <button type="submit" className="btn btn--blue to-do__add">
        Добавить заметку
      </button>
      <button
        type="button"
        className="btn btn--red to-do__delete"
        onClick={onСlear}>
        Очистить список
      </button>
    </form>
  );
};

export default Form;
