import IconButton from "./iconButton";
import {MdDeleteForever, MdOutlineMoreVert} from "react-icons/md"
import {BiSolidEditAlt}  from "react-icons/Bi"

export default function TaskFunctions ({ edit, remove }) {
    return (
        <div id="taskFunctions" className="flex gap-2">
            { handleEdit(edit) }
            { handleDelete(remove) }
            { handleMoreOptions(remove) }


        </div>    
    )

}

function handleDelete (Actived) {
    if ( Actived ) { 
        return <IconButton icon={ <MdDeleteForever /> } />
    } else {
        return ''
    }    
}

function handleEdit (Actived) {
    if ( Actived ) { 
        return <IconButton icon={ <BiSolidEditAlt /> } />
    } else {
        return ''
    }    
}

function handleMoreOptions (Actived) {
    if ( Actived ) { 
        return <IconButton icon={ <MdOutlineMoreVert /> } />
    } else {
        return ''
    }    
}