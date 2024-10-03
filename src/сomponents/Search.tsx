import { observer } from "mobx-react-lite";

import notesStore from "../stores/notesStore";

const Search = observer(() => {
  const { search, setSearch } = notesStore;

  return (
    <div className="to-do__header-column">
      <input
        type="text"
        placeholder="Начните печатать..."
        className="input to-do__search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
});

export default Search;
