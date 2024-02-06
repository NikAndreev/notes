import React, { useMemo, useEffect } from "react";
import Filter from "./сomponents/Filter";
import Search from "./сomponents/Search";
import Form from "./сomponents/Form";
import Items from "./сomponents/Items";
import { useDispatch, useSelector } from "react-redux";
import { setItemsAction } from "./store/reducers/items";

function App() {
  const items = useSelector((state) => state.items.items);

  const orderedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a.order > b.order) return 1;
      if (a.order < b.order) return -1;
      return 0;
    });
  }, [items]);

  const dispatch = useDispatch();

  useEffect(() => {
    const LSItems = localStorage.getItem("items");

    if (LSItems) {
      dispatch(setItemsAction(JSON.parse(LSItems)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <section className="to-do">
        <h1 className="to-do__title">Заметки</h1>
        <div className="to-do__header">
          <Filter />
          <Search />
        </div>
        <Items items={orderedItems} />
        <Form items={orderedItems} />
      </section>
    </div>
  );
}

export default App;
