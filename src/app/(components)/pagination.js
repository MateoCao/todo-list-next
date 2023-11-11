import Txt from "./txt";

export default function Pagination ({ className }) {
    return(
        <section id="pagination" className={`w-full flex border ${className} items-center justify-evenly px-5 h-10 drop-shadow-lg rounded-lg`}>
            <Txt> 34 tasks </Txt>
            <Txt> pagination </Txt>
            <Txt> Configuracion </Txt>
        </section>
    )
}