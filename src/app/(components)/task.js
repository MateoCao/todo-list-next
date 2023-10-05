'use client'
import React, { useState } from 'react';

export default function Task ({ children }) {

    // Inicializa el valor del input con el texto proporcionado o una cadena vacía
    const [taskText, setTaskText] = useState(children || ''); 

    return(
        <div id="task" className="h-8 w-full flex border rounded-xl bg-slate-300 items-center justify-between px-5">
            <div id="taskIcon" className="w-2 h-5"> X </div>
            <input
                type="text"
                id="taskText"
                className="h-5 w-9/12 border rounded-xl bg-slate-100"
                value={taskText} // Establece el valor del input
                onChange={(e) => setTaskText(e.target.value)} // Maneja cambios en el input
            />
            <div id="taskFunctions" className="w-5 h-5">
                <button id="iconButton" className=""> E </button>
            </div>
        </div>
    )
}