import Boton from "./button";
import Titulo from "./title";

export default function MainTaskBar () {
    
    return(
        <section id='mainTaskBar' className={`w-full h-10 flex justify-between content-center`} >
            <Titulo> My Table Task </Titulo>
            <div id="buttons" className="h-8 gap-2 flex">
                <Boton> Share list </Boton>
                <Boton> Clear </Boton>
            </div>
        </section>
    )
}
