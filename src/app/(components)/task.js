'use client'
import React, { useState } from 'react'
import TaskFunctions from './taskFunctions'
import TaskGestions from './TaskGestions'

export default function Task ({ children, bg }) {

    // Inicializa el valor del input con el texto proporcionado o una cadena vacía
    const [taskText, setTaskText] = useState(children || ''); 
    const [isDisabled, setIsDisabled] = useState(true);

    const bg1 = "bg-slate-300" 
    return(
            <div id="task" className={`h-8 w-full flex flex-wrap border rounded-xl  items-center justify-between px-5 ${bg || bg1}`}>
                <TaskGestions 
                    cancel={true}
                    moreOptions={true}
                />
                <input
                    type="text"
                    id="taskText"
                    className="h-5 w-9/12 border rounded-xl bg-slate-100 px-5 text-xs"
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
