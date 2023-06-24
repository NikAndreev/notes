import React, {useState, useMemo, useEffect} from "react";
import Filter from './сomponents/Filter'
import Search from './сomponents/Search'
import Form from './сomponents/Form'
import Items from './сomponents/Items'
import './scss/template.scss'

function App() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])

  const filteredItems = useMemo(() => {
    switch (filter) {
      case 'completed':
        return items.filter(item => item.isCompleted)
      case 'uncompleted':
        return items.filter(item => !item.isCompleted)
      default:
        return items
    }
  }, [items, filter])

  const filteredAndSearchedItems = useMemo(() => {
    return filteredItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }, [filteredItems, search])

  const orderedItems = useMemo(() => {
    return [...filteredAndSearchedItems].sort((a, b) => {
      if (a.order > b.order) return 1
      if (a.order < b.order) return -1
      return 0
    })
  }, [filteredAndSearchedItems])

  useEffect(() => {
    const LSItems = localStorage.getItem('items')

    if (LSItems) {
      setItems(JSON.parse(LSItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const createItem = (item) => {
    setItems([...items, {
      ...item,
      order: orderedItems.length ? orderedItems[orderedItems.length - 1].order + 1 : 0
    }])
  }

  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  const toggleItem = (item) => {
    setItems(items.map(i => i.id === item.id ? item : i))
  }

  const moveItem = (item, direction) => {
    const shift = direction === 'up' ? -1 : 1
    const closestItem = orderedItems[orderedItems.findIndex(i => i.id === item.id) + shift]
    
    setItems(items.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          order: closestItem.order
        }
      }

      if (i.id === closestItem.id) {
        return {
          ...i,
          order: item.order
        }
      }

      return i
    }))
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
          items={orderedItems}
          remove={removeItem}
          toggle={toggleItem}
          move={moveItem}
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
