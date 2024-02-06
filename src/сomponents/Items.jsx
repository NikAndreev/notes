import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemsAction } from "../store/reducers/items";
import Item from "./Item";

const Items = ({ items }) => {
  const filter = useSelector((state) => state.filter.filter);
  const search = useSelector((state) => state.search.search);

  const dispatch = useDispatch();

  const moveItem = (item, direction) => {
    const shift = direction === "up" ? -1 : 1;
    const closestItem =
      filteredAndSearchedItems[
        filteredAndSearchedItems.findIndex((i) => i.id === item.id) + shift
      ];

    dispatch(
      setItemsAction(
        items.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              order: closestItem.order,
            };
          }

          if (i.id === closestItem.id) {
            return {
              ...i,
              order: item.order,
            };
          }

          return i;
        })
      )
    );
  };

  const filteredItems = useMemo(() => {
    switch (filter) {
      case "completed":
        return items.filter((item) => item.isCompleted);
      case "uncompleted":
        return items.filter((item) => !item.isCompleted);
      default:
        return items;
    }
  }, [items, filter]);

  const filteredAndSearchedItems = useMemo(() => {
    return filteredItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [filteredItems, search]);

  if (filteredAndSearchedItems.length) {
    return (
      <ul className="to-do__list">
        {filteredAndSearchedItems.map((item) => (
          <Item key={item.id} item={item} move={moveItem} />
        ))}
      </ul>
    );
  } else {
    return <div className="to-do__message">Заметок пока нет.</div>;
  }
};

export default Items;
