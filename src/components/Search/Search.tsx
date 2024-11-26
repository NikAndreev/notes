import { observer } from "mobx-react-lite";
import notesStore from "../../stores/notesStore";
import Input from "../UI/Input";

import styles from "./Search.module.scss";

const Search = observer(() => {
  const { search, setSearch } = notesStore;

  return (
    <Input
      placeholder="Начните печатать..."
      className={styles.search}
      value={search}
      onChange={setSearch}
    />
  );
});

export default Search;
