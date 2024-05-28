import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./сomponents/Filter";
import Search from "./сomponents/Search";
import Form from "./сomponents/Form";
import Items from "./сomponents/Items";
import Loader from "./сomponents/Loader";
import { fetchItems } from "./asyncActions/items";

function App() {
  const { items, loading } = useSelector((state) => state.items);

  const orderedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a.order > b.order) return 1;
      if (a.order < b.order) return -1;
      return 0;
    });
  }, [items]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="container">
      <section className="to-do">
        <h1 className="to-do__title">Заметки</h1>
        <div className="to-do__header">
          <Filter />
          <Search />
        </div>
        {loading ? <Loader /> : <Items items={orderedItems} />}
        <Form items={orderedItems} />
      </section>
    </div>
  );
}

export default App;
