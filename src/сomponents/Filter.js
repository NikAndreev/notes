const Filter = ({filter, setFilter}) => {
  const items = [
    {
      value: 'all',
      text: 'Все'
    },
    {
      value: 'completed',
      text: 'Выполненные'
    },
    {
      value: 'uncompleted',
      text: 'Невыполненные'
    }
  ]

  return (
    <div className="to-do__filter">
      <div className="to-do__h2">Фильтр:</div>
      <ul className="to-do__filter-list">
        {
          items.map(item => 
            <li 
              className="to-do__filter-item"
              key={item.value}
            >
              <label className="checkbox">
                <input 
                  type="radio" 
                  name="filter" 
                  className="checkbox__native" 
                  value={item.value} 
                  checked={item.value === filter}
                  onChange={e => setFilter(e.target.value)}
                />
                <button 
                  type="button" 
                  className="checkbox__custom"
                >
                </button>
                <span className="checkbox__text">
                  {item.text}
                </span>
              </label>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Filter
