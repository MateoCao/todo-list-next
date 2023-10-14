'use client'
import React, { useState } from 'react';
import TaskFunctions from './taskFunctions';
import TaskGestions from './TaskGestions';

export default function Task ({ children }) {

    // Inicializa el valor del input con el texto proporcionado o una cadena vacía
    const [taskText, setTaskText] = useState(children || ''); 

    return(
            <div id="task" className="h-8 w-full flex flex-wrap border rounded-xl bg-slate-300 items-center justify-between px-5">
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
                    disabled
                />
                <TaskFunctions 
                    edit={true}
                    remove={true}
                />
            </div>

    )
}