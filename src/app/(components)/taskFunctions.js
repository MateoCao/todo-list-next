import IconButton from "./iconButton";
import {MdDeleteForever, MdCancel} from "react-icons/md"

export default function TaskFunctions () {
    return (
        <div id="taskFunctions" className="flex gap-2">
            <IconButton icon={ <MdDeleteForever /> } />
            <IconButton icon={ <MdCancel /> } />
        </div>    
    )

}