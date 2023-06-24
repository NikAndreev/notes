import React, {useState} from "react";
import Filter from './сomponents/Filter'
import Search from './сomponents/Search'
import './scss/template.scss'

function App() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  return (
    <div className="container">
      <section className="to-do">
        <h1 className="to-do__title">Заметки</h1>	
        <div className="to-do__header">
          <Filter 
            filter={filter}
            setFilter={setFilter}
          />
          <Search 
            search={search}
            setSearch={setSearch}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
