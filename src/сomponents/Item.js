const Item = ({item, remove}) => {
  const onRemove = () => {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      remove(item)
    } 
  }

  return (
    <li className="to-do__item">
      <label className="checkbox to-do__item-checkbox">
        <input 
          type="checkbox" 
          className="checkbox__native"   
        />
        <button 
          type="button" 
          className="checkbox__custom"
        >
        </button>
        <span className="checkbox__text">
          {item.title}
        </span>
      </label>
      <span className="to-do__item-arrows">
        <button 
          className="to-do__item-arrow"
        >
          🠕
        </button>
        <button 
          className="to-do__item-arrow"
        >
          🠗
        </button>
      </span>
      <button 
        type="button" 
        className="to-do__item-delete"
        onClick={onRemove}
      >
        Удалить
      </button>
    </li>
  )
}

export default Item
