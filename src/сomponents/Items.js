import Item from './Item'

const Items = ({items, remove, toggle, move}) => {
  if (items.length) {
    return (
      <ul className="to-do__list">
        {
          items.map(item => 
            <Item 
              key={item.id}
              item={item}
              remove={remove}
              toggle={toggle}
              move={move}
            />
          )
        }
      </ul>
    )
  } else {
    return (
      <div className="to-do__message">
        Заметок пока нет.
      </div>
    )
  }
}

export default Items
