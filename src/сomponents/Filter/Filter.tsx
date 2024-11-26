import { observer } from "mobx-react-lite";
import notesStore from "../../stores/notesStore";
import Radio from "../UI/Radio";

import styles from "./Filter.module.scss";

const Filter = observer(() => {
  const { filter, setFilter } = notesStore;

  const fields = [
    {
      name: "Все",
      value: "",
    },
    {
      name: "Выполненные",
      value: "completed",
    },
    {
      name: "Невыполненные",
      value: "uncompleted",
    },
  ];

  return (
    <ul className={styles.filter}>
      {fields.map((field) => (
        <li className={styles.filter__item} key={field.value}>
          <Radio
            name="filter"
            label={field.name}
            value={field.value}
            checked={field.value === filter}
            onChange={setFilter}
          />
        </li>
      ))}
    </ul>
  );
});

export default Filter;
