export default function Boton ({ icon, text }) {
    
    if ( icon=== null || icon === undefined ) {
        return ( <button className="border p-1 rounded-md bg-slate-300 drop-shadow-lg"> { text } </button> )
      }
    if ( text=== null || text === undefined ) {
        return (
            <button className="rounded-md drop-shadow-lg">
                { icon }
                { text } 
            </button>
        )
    }
}