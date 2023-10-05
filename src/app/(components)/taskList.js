export default function TaskList ({ children, bg }) {
    
    const bgDefault = "bg-slate-200"
    
    return(
        <section id='taskList' className={`${ bg || bgDefault } w-7/12 rounded-xl h-5/6 drop-shadow-lg`}>
            { children }
        </section>
    )
}
