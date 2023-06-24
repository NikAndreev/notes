import React, {useState} from "react";

const Form = ({create, clear}) => {
  const [item, setItem] = useState({
    title: ''
  })

  const [isError, setIsError] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    if (item.title) {
      setIsError(false)
      create({
        ...item,
        id: Date.now(),
        createdAt: new Date(),
        isCompleted: false
      })
      setItem({
        title: ''
      })
    } else {
      setIsError(true)
    }
  }

  const onСlear = () => {
    if (window.confirm('Вы уверены, что хотите очистить список?')) {
      clear()
    } 
  }

  return (
    <form 
      className="to-do__form"
      onSubmit={onSubmit}
    >
      <input 
        type="text" 
        className={isError ? 'input to-do__input error' : 'input to-do__input'}
        value={item.title}
        onChange={e => setItem({...item, title: e.target.value})}
      />
      <button 
        type="submit" 
        className="btn btn--blue to-do__add"
      >
        Добавить заметку
      </button>
      <button 
        type="button" 
        className="btn btn--red to-do__delete"
        onClick={onСlear}
      >
        Очистить список
      </button>
    </form>
  )
}

export default Form
