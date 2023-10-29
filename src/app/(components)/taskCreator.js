'use client'
import { BsArrowUpCircle } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import IconButton from './iconButton'

export default function TaskCreator () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return (
        <div id="taskCreator" className="w-full flex  items-center border bg-slate-300 px-5 h-10 rounded-b-xl drop-shadow-lg">
          <form className="w-full my-auto flex gap-5 items-center justify-evenly" onSubmit={handleSubmit(onSubmit)}>
            <input
                  type="text"
                  name="description"
                  id="description"
                  className="h-5 w-10/12 border rounded-xl bg-slate-100 p-3 text-xs text-black"
                  {...register('description')}
            />
            {errors.name?.message && (
              <p className='text-sm text-red-600'>{errors.name.message}</p>
            )}
            <button className='text-2xl' type='sumbit'><IconButton icon={ <BsArrowUpCircle /> } /></button>
          </form>

        </div>
  )
}
