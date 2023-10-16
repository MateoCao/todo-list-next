import Txt from "./txt"

export default function RecurrenceDays () {

    const weekly = ["D", "L", "M", "M", "J", "V", "S"]
    return (
        <section id="RecurrenceDays" className="flex gap-4">
          {
            weekly.map( (dia, index) => ( 
                <button key={index} className="rounded-full bg-slate-300 w-7 h-7">
                    <Txt className="font-bold">{dia}</Txt>
                </button>
            ))
          }
        </section>
    )
}