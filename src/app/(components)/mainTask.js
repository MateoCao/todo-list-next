export default function MainTask ({ children, bgimagen }) {
    
    const sectionStyle = {
        backgroundImage: "url(" + { bgimagen } + ")"
    };

    return(
        <section id='mainTask'className={`h-[93vh] w-5/6 p-8 ${bgimagen ? sectionStyle : "bg-gradient-to-r from-cyan-500 to-blue-500" } flex flex-wrap align-items gap-10`} >
            { children }
        </section>
    )
}
