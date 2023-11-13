import { MdDelete } from 'react-icons/md'
import Boton from './button'
import Titulo from './title'

export default function MainTaskBar ({className}) {
  return (
        <section id='mainTaskBar' className={`${className} h-10 flex justify-between content-center`} >
            <Titulo> My Table Task </Titulo>
            <div id="buttons" className="h-8 gap-2 flex">
                <Boton > Share list </Boton>
                <Boton icon={ <MdDelete /> }> Clear </Boton>
            </div>
        </section>
  )
}
