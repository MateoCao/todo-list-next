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
        <div id="task" className={`h-8 w-full flex flex-wrap border rounded-xl  items-center justify-between px-5 ${bg || bg1}`}>
            <TaskGestions
                cancel={true}
                moreOptions={true}
            />
            <input
                type="text"
                id={task._id}
                className="h-5 w-9/12 border rounded-xl bg-slate-100 px-5 text-xs text-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <TaskFunctions
                edit={true}
                remove={true}
                task={task}
            />
        </div>

  )
}
