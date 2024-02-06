import { useDispatch, useSelector } from "react-redux";
import { setSearchAction } from "../store/reducers/search";

const Search = () => {
  const search = useSelector((state) => state.search.search);

  const dispatch = useDispatch();

  const setSearch = (search) => {
    dispatch(setSearchAction(search));
  };

  return (
    <div className="to-do__header-column">
      <div className="to-do__h2">Поиск:</div>
      <input
        type="text"
        placeholder="Начните печатать..."
        className="input to-do__search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
