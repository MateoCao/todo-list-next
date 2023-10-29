'use client'
import React, { useContext, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import IconButton from './iconButton'
import { Context } from '../(context)/context'
import Task from './task'

export default function TaskCreator ({ children, className, taskColor }) {
  // Inicializa el valor del input con el texto proporcionado o una cadena vacía
  const [taskText, setTaskText] = useState(children || '')

  return (
        <div id="taskCreator" className="w-full flex border bg-slate-300 items-center justify-evenly px-5 h-10 rounded-b-xl drop-shadow-lg">
            <input
                type="text"
                id="taskText"
                className="h-5 w-10/12 border rounded-xl bg-slate-100 px-5 text-xs"
                value={taskText} // Establece el valor del input
                onChange={(e) => setTaskText(e.target.value)} // Maneja cambios en el input
            />
            <IconButton icon={ <BsArrowUpCircle /> } />

        </div>
  )
}
