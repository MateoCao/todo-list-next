'use client'
import IconButton from './iconButton'
import { MdDeleteForever, MdOutlineMoreVert, MdOutlineSaveAs } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/Bi'
import { TiCancel } from 'react-icons/ti'
import { useContext, useState } from 'react'
import { Context } from '../(context)/context'

export default function TaskFunctions ({ edit, remove, handleIsDisabled }) {
  return (
        <div id="taskFunctions" className="flex gap-2">
            { handleEdit(edit, handleIsDisabled) }
            { handleDelete(remove) }
            { handleMoreOptions(remove) }
        </div>
  )
}

function handleDelete (Actived) {
  if (Actived) {
    return <IconButton id={'deleteButton'} icon={ <MdDeleteForever /> } onClick={} />
  } else {
    return ''
  }
}


function handleEdit (Actived, handleIsDisabled) {
  const [editEnabled, setEditEnabled] = useState(true)

  const handleEditClick = () => {
    setEditEnabled(!editEnabled)
  }

  // Si se activa la edicion, desactiva el disabled de la tarea desde este useState.
  if (editEnabled) {
    handleIsDisabled(true)
  }

  if (Actived) {
    return (
            <>
                <IconButton
                    icon={<BiSolidEditAlt />}
                    onClick={handleEditClick}
                    className={`${editEnabled ? '' : 'hidden'}`}
                />
                <IconButton
                    icon={<MdOutlineSaveAs />}
                    onClick={handleEditClick}
                    className={`${editEnabled ? 'hidden' : ''}`}
                />
                <IconButton
                    icon={<TiCancel />}
                    onClick={handleEditClick}
                    className={`${editEnabled ? 'hidden' : ''}`}
                />
            </>
    )
  } else {
    return null // Devuelve null si Actived es falso
  }
}

function handleMoreOptions (Actived) {
  if (Actived) {
    return <IconButton icon={ <MdOutlineMoreVert /> } />
  } else {
    return ''
  }
}
