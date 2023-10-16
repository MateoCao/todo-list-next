import Boton from "./button";
import Txt from "./txt";

export default function FooterEditTask () {
    return (
        <section id="FooterEditTask" className="w-full h-10 flex bg-slate-300 rounded-b-lg">
            <button className={"w-1/2 h-full border-r-slate-100 border-r"}> <Txt>cancel</Txt> </button>
            <button className={"w-1/2 h-full"}> <Txt>guardar</Txt> </button>
        </section>
    )
}