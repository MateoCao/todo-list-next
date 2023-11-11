'use client'
import React, { useContext, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import IconButton from './iconButton'
import { Context } from '../(context)/context'
import Task from './task'

export default function TaskCreator ({ children, className, taskColor }) {
  const { lsTask, setlsTask } = useContext(Context)

  // Inicializa el valor del input con el texto proporcionado o una cadena vacía
  const [taskText, setTaskText] = useState(children || '')

  // Al cliquear guarda una nueva tarea en la lista de tareas del contexto
  const handleCreation = () => {
    const task = {
      id: lsTask.length + 1,
      component: <Task key={lsTask.length + 1} id={lsTask.length + 1} bg={taskColor}>{taskText}</Task>
    }
    // agrega la nueva task a la lista de tareas
    setlsTask([...lsTask, task])

    // vuelve a poner el campo del taskCreator vacia
    setTaskText('')
  }

  return (
        <div id="taskCreator" className={`w-full flex border ${className} items-center justify-evenly px-5 h-10 drop-shadow-lg rounded-lg`}>
            <input
                type="text"
                id="taskText"
                className="h-5 w-10/12 border rounded-xl bg-slate-100 px-5 text-xs"
                value={taskText} // Establece el valor del input
                onChange={(e) => setTaskText(e.target.value)} // Maneja cambios en el input
            />
            <IconButton icon={ <BsArrowUpCircle /> } onClick={ handleCreation } />
        </div>
  )
}
