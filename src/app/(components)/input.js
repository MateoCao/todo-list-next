'use client'
import React, { useState } from 'react';

export default function Input ({value, type}) {

    const [texto, setTexto] = useState( value || '');

    // Función de manejo para actualizar el estado cuando el input cambie
    const handleInputChange = (event) => {
      setTexto(event.target.value);
    };

    return(
        <input 
            type={ type || 'text' }
            className="px-1 w-1/3 rounded-sm text-blue-gray-900 text-xs" 
            value={texto} // Enlazamos el valor del input al estado 'texto'
            onChange={handleInputChange} // Asignamos la función de manejo al evento 'onChange'
        /> 
    )
}