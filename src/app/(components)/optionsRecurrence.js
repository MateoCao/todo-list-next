import DropDown from "./dropDown"
import InputCount from "./inputCount"
import RecurrenceDays from "./recurrenceDays";
import RecurrencePeriodOptions from "./recurrencePeriodOptions";
import Txt from "./txt"

export default function OptionsRecurrence() {
    return (
      <section id="optionsRecurrence" className="flex flex-col w-full px-5 justify-evenly h-1/2">
        <div id="RecurrenceSentence" className="flex w-full gap-3 items-center h-5">
          <Txt>Repetir cada</Txt>
          <InputCount />
          <DropDown lsOptions={["día", "semana", "mes", "año"]} />
        </div>
        <RecurrenceDays />
        <RecurrencePeriodOptions />
        
      </section>
    );
  }