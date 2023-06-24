const Search = ({search, setSearch}) => {
  return (
    <div className="to-do__header-column">
      <div className="to-do__h2">Поиск:</div>
      <input 
        type="text" 
        placeholder="Начните печатать..." 
        className="input to-do__search" 
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
