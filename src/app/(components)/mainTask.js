export default function MainTask ({ children, className }) {
    
    return(
        <section id='mainTask'
        className={`${ className } w-full h-screen flex flex-wrap align-items justify-start`} >
            { children }
        </section>
  )
}
