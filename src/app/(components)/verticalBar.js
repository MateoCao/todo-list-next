export default function VerticalBar ({ children, bg }) {
    
    const bgDefault = "blue-gray-200"
    
    return(
        <section id='verticalBar' className={`h-[93vh] w-1/6 drop-shadow-lg ${ bg || bgDefault }`}>
            { children }
        </section>
    )
}
