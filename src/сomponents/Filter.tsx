import { observer } from "mobx-react-lite";

import notesStore from "../stores/notesStore";

const Filter = observer(() => {
  const { filter, setFilter } = notesStore;

  const fields = [
    {
      value: "",
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
      <ul className="to-do__filter">
        {fields.map((field) => (
          <li className="to-do__filter-item" key={field.value}>
            <label className="radio">
              <input
                type="radio"
                name="filter"
                className="radio__native"
                value={field.value}
                checked={field.value === filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <button type="button" className="radio__custom"></button>
              <span className="radio__text">{field.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Filter;
