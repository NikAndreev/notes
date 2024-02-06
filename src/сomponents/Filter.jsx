import { useDispatch, useSelector } from "react-redux";
import { setFilterAction } from "../store/reducers/filter";

const Filter = () => {
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const setFilter = (filter) => {
    dispatch(setFilterAction(filter));
  };

  const items = [
    {
      value: "all",
      text: "Все",
    },
    {
      value: "completed",
      text: "Выполненные",
    },
    {
      value: "uncompleted",
      text: "Невыполненные",
    },
  ];

  return (
    <div className="to-do__header-column">
      <div className="to-do__h2">Фильтр:</div>
      <ul className="to-do__filter">
        {items.map((item) => (
          <li className="to-do__filter-item" key={item.value}>
            <label className="radio">
              <input
                type="radio"
                name="filter"
                className="radio__native"
                value={item.value}
                checked={item.value === filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <button type="button" className="radio__custom"></button>
              <span className="radio__text">{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
