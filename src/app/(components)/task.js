'use client'
import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import IconButton from './iconButton'
import TaskFunctions from './taskFunctions'

export default function Task ({ children }) {
  // Inicializa el valor del input con el texto proporcionado o una cadena vacía
  const [taskText, setTaskText] = useState(children || '')

  return (
        <div id="task" className="h-8 w-full flex border rounded-xl bg-slate-300 items-center justify-between px-5">
            <IconButton icon={ <BsCheckCircle /> } />
            <input
                type="text"
                id="taskText"
                className="h-5 w-9/12 border rounded-xl bg-slate-100 px-5 text-xs"
                value={taskText} // Establece el valor del input
                onChange={(e) => setTaskText(e.target.value)} // Maneja cambios en el input
            />
            <TaskFunctions />
        </div>
  )
}
