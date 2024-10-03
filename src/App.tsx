import React, { useEffect } from "react";
import Filter from "./сomponents/Filter";
import Search from "./сomponents/Search";
import Form from "./сomponents/Form";
import Notes from "./сomponents/Notes";
import Loader from "./сomponents/Loader";
import { observer } from "mobx-react-lite";

import notesStore from "./stores/notesStore";

const App = observer(() => {
  const { loading, getNotes } = notesStore;

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container">
      <section className="to-do">
        <h1 className="to-do__title">Заметки</h1>
        <div className="to-do__header">
          <Filter />
          <Search />
        </div>
        {loading ? <Loader /> : <Notes />}
        <Form />
      </section>
    </div>
  );
});

export default App;
