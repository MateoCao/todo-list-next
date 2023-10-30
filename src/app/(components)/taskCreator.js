'use client'
import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import IconSubmitButton from './IconSubmitButton.js'
import { useForm } from 'react-hook-form'
import { useTodoContext } from '../(context)/TodoListContext.jsx'

export default function TaskCreator () {
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
      console.log(res)
      reset()
    }
  }
  return (
        <div id="taskCreator" className="w-full flex border bg-slate-300 items-center justify-evenly px-5 h-10 rounded-b-xl drop-shadow-lg">
          <form onSubmit={handleSubmit(submitTask)}>
            <input
                  type="text"
                  id="taskText"
                  name="title"
                  className="h-5 w-10/12 border rounded-xl bg-slate-100 px-5 text-xs text-black"
                  {...register('title')}
              />
              {errors?.message && <p className='text-sm text-red-600'>Error al subir tarea</p>}
              <IconSubmitButton icon={ <BsArrowUpCircle /> } />
          </form>

        </div>
  )
}
