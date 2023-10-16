import { MdCalendarMonth } from "react-icons/md";
import Txt from "./txt";

export default function TaskRecurrence () {

    const lsOptions = ["No se repite","Todos los dias","Cada Semana","Todos los meses","Personalizado..."]

    const handleOptions = () => {
        return lsOptions.slice(1).map( (opt, index) => ( 
            <option key={index}> <Txt> {opt} </Txt> </option> 
        ))
    }

    return (
        <section className="h-8 w-8/12 flex border rounded-xl bg-slate-300 items-center justify-between px-5 ml-5">    
        <MdCalendarMonth />
            <select id="taskRecurrence" className="h-5 w-10/12 border rounded-xl bg-slate-100 px-5 text-xs">
                <option selected> <Txt>{lsOptions[0] }</Txt> </option>
                { handleOptions() }
            </select>
        </section>
    )
}

