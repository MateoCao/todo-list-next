export default function Boton ({ children, icon }) {


        return (
            <button className="rounded-md drop-shadow-lg gap-1 bg-slate-200 px-2 flex justify-center items-center">
                { children } 
                { handleIcon(icon) }
            </button>
        )
}

function handleIcon ( icon ) {
    if ( !(icon === null || icon === undefined) ) {
        return icon
    } 
}