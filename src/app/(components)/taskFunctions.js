'use client'
import { MdDeleteForever, MdOutlineMoreVert } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useTodoContext } from '../(context)/TodoListContext'
import { useRouter } from 'next/navigation'

export default function TaskFunctions ({ edit, remove, task }) {
  return (
        <div id="taskFunctions" className="flex gap-2">
            { handleEdit(edit, task) }
            { handleDelete(remove, task) }
            { handleMoreOptions(remove, task) }

        </div>
  )
}

function handleDelete (active, task) {
  const { deleteTask } = useTodoContext()

  if (active) {
    return <button onClick={() => deleteTask(task)} className="rounded-md drop-shadow-lg h-fit"> <MdDeleteForever /> </button>
  } else {
    return ''
  }
}

function handleEdit (active, task) {
  const handleUpdate = async () => {
  }
  if (active) {
    return <button onClick={handleUpdate} className="rounded-md drop-shadow-lg h-fit"> <BiSolidEditAlt /> </button>
  } else {
    return ''
  }
}

function handleMoreOptions (active, task) {
  const router = useRouter()
  if (active) {
    return <button onClick={() => router.push(`/tasks/${task._id}`)} className="rounded-md drop-shadow-lg h-fit"> <MdOutlineMoreVert /> </button>
  } else {
    return ''
  }
}
