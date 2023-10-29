'use client'
import { useState } from 'react'

export default function InputCount () {
  const [texto, setTexto] = useState('')

  // Función de manejo para actualizar el estado cuando el input cambie
  const handleInputChange = (event) => {
    setTexto(event.target.value)
  }

  const sumar = () => {
    setTexto(texto + 1)
  }

  const restar = () => {
    if (texto - 1 >= 0) {
      setTexto(texto - 1)
    } else {
      setTexto(0)
    }
  }

  return (
        <div className="rounded-sm p-1 flex justify-center items-center gap-2">
            <button onClick={sumar} className="h-full w-2 text-bold">+</button>
            <input
                type="text"
                value={texto} // Enlazamos el valor del input al estado 'texto'
                onChange={handleInputChange} // Asignamos la función de manejo al evento 'onChange'
                className="h-full bg-slate-100 rounded-sm w-12 flex justify-center text-center text-blue-gray-900 text-xs"
            />
            <button onClick={restar} className="h-full w-2 text-bold">-</button>
        </div>
  )
}
