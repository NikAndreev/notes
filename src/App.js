import React, {useState} from "react";
import Filter from './сomponents/Filter'
import Search from './сomponents/Search'
import Form from './сomponents/Form'
import Items from './сomponents/Items'
import './scss/template.scss'

function App() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])

  const createItem = (item) => {
    setItems([...items, item])
  }

  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  const clear = () => {
    setItems([])
  }

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
        <Items 
          items={items}
          remove={removeItem}
        />
        <Form
          create={createItem}
          clear={clear}
        />
      </section>
    </div>
  );
}

export default App;
