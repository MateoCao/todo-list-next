'use client'
import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import IconSubmitButton from './IconSubmitButton.js'
import { useForm } from 'react-hook-form'
import { useTodoContext } from '../(context)/TodoListContext.jsx'
import Txt from './txt.js'

export default function TaskCreator ({ className }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { sendTask } = useTodoContext()

  const submitTask = async (data) => {
    const task = {
      title: data.title,
      description: 'optionaldescription',
      completed: false,
      date: 'creationdate',
      expired: false
    }
    const res = await sendTask(task)

    if (res) {
      reset()
    }
  }
  return (
          <form
            id="taskCreator"
            onSubmit={handleSubmit(submitTask)}
            className={`${className} flex flex-wrap items-center justify-evenly rounded`}
          >

            <div id='taskCreator-upContainer' className='w-full flex flex-wrap bg-slate-200/75 px-5 py-2 items-center justify-evenly rounded'>
              <input
                    type="text"
                    id="taskText"
                    name="title"
                    className="h-8 w-10/12 border rounded bg-slate-200 px-5 text-xs text-black"
                    {...register('title')}
              />
              {errors?.message && <p className='text-lg text-red-600'>Error al subir tarea</p>}
              <IconSubmitButton icon={ <BsArrowUpCircle size={'2rem'} color="#0F172A" /> }/>
            </div>

            <div id='moreOptions' className='h-4 w-full flex gap-3 justify-center bg-slate-200/50 items-center px-5 py-3 invisible focus:visible'>
              <Txt> etiquetas </Txt> { /** etiquetas personalizables */}
              <Txt> fecha de vencimiento </Txt> { /** al llegar a la fecha se cancela o elimina la tarea */}
              <Txt> repetir </Txt> { /** recurrencia */}
              <Txt> prioridad </Txt> { /** importante, urgente, importante y urgente */}
            </div>
          </form>
  )
}
