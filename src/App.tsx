import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import notesStore from "./stores/notesStore";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Search from "./components/Search";
import Title from "./components/UI/Title";
import Loader from "./components/UI/Loader";
import Container from "./components/UI/Container";

import styles from "./App.module.scss";

const App = observer(() => {
  const { loading, getNotes } = notesStore;

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Container>
      <section className={styles.page}>
        <Title className={styles.page__title}>Заметки</Title>
        <div className={classNames(styles.header, styles.page__header)}>
          <div className={styles.header__column}>
            <Filter />
          </div>
          <div className={styles.header__column}>
            <Search />
          </div>
        </div>
        {loading ? <Loader className={styles.page__loader} /> : <Notes />}
        <Form />
      </section>
    </Container>
  );
});

export default App;
