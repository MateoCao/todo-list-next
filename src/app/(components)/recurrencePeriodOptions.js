'use client'
import InputCount from "./inputCount"
import React, { useState } from 'react';
import Txt from './txt';
import Input from "./input";

export default function RecurrencePeriodOptions() {
    
  const [selectedOption, setSelectedOption] = useState('option1'); // Inicializamos el estado con la opción predeterminada

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Actualizamos el estado con la opción seleccionada
  };

  return (
    <div className="w-full flex flex-col gap-2"> 
      <Txt>opciones de inicio</Txt>
      <label className="w-full flex gap-2 justify-start items-center">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <Txt> al momento </Txt>
        
      </label>
      <Txt>opciones de finalizacion</Txt>
      <label className="w-full flex gap-2 justify-start items-center">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <Txt> No repetir </Txt>
      </label>
      <label className="w-full flex gap-2 justify-start items-center">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          className=""
        />
      <Txt className={"w-5"}> El </Txt> <Input type={"date"} value={"7 de enero"}/>
      </label>
      <label className="w-full flex justify-start gap-2 flex-row items-center">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
          className=""
        />
        <Txt> Despues de </Txt> 
        <InputCount /> 
        <Txt> Ocurrencias </Txt>
      
      </label>

    </div>
  );
}