'use client'
import React, { useState } from 'react'
import TaskFunctions from './taskFunctions'
import TaskGestions from './TaskGestions'

export default function Task ({ id, bg }) {
  // Inicializa el valor del input con el texto proporcionado o una cadena vacía
  const [taskText, setTaskText] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const bg1 = 'bg-slate-300'

  return (
    <div id={`task0${id}`} className={`h-9 w-full flex flex-wrap border rounded items-center justify-between px-5 mx-5 ${bg || bg1}`} >
        <TaskGestions
            cancel={true}
            moreOptions={true}
        />
        <input
            type="text"
            id="taskText"
            className="h-6 w-10/12 border rounded-md bg-slate-100 px-5 text-xs text-slate-950"
            value={taskText} // Establece el valor del input
            onChange={(e) => setTaskText(e.target.value)} // Maneja cambios en el input
            disabled={isDisabled} // Habilita o deshabilita el input según el estado isDisabled
            />
        <TaskFunctions
            edit={true}
            remove={true}
            handleIsDisabled={setIsDisabled}
        />
    </div>
  )
}
