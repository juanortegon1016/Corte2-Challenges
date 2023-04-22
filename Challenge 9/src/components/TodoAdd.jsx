import React from 'react'

export const TodoAdd = ({ onNewTodo}) => {

    const onFormSubmit = (event)=> {
        event.preventDefault()

        const newTodo = {
            id: new Date().getTime(), description: 'Hacer trabajo', 
            done: false
        }
        onNewTodo ( newTodo)
    }
  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
        <input
            type='text'
            placeholder='Tarea'
            className='form-control'
        />
        <button type='submit'
            placeholder='Tarea' className='form-control'>Añadir
        </button>
    </form>
  )
}