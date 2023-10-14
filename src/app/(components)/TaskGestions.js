import { BsCheckCircle } from 'react-icons/bs';
import IconButton from './iconButton';
import {MdCancel} from "react-icons/md"

export default function TaskGestions ({ cancel }) {
    return (
        <section id='TaskGestions' className='flex gap-2'>
                <IconButton icon={ <BsCheckCircle /> } />
                { handleCancel(cancel) }
        </section>
    )
}

function handleCancel (Actived) {
    if ( Actived ) { 
        return <IconButton icon={ <MdCancel /> } />
    } else {
        return ''
    }    
}