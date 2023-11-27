'use client'
import React, { useState } from 'react'
import TaskFunctions from './taskFunctions'
import TaskGestions from './TaskGestions'

export default function Task ({ id, bg, task }) {
  // Inicializa el valor del input con el texto proporcionado o una cadena vacía
  const [myTitle, setMyTitle] = useState(task.title || '')

  const bg1 = 'bg-slate-300'

  if (!task) return <>Loading...</>

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
                value={myTitle}
                onChange={(e) => setMyTitle(e.target.value)}
                />
            <TaskFunctions
                edit={true}
                remove={true}
                task={task}
            />
        </div>

  )
}
