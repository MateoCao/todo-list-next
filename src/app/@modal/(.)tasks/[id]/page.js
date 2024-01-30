'use client'

import { useEffect, useState } from 'react'
import { useTodoContext } from '@/app/(context)/TodoListContext'
import Modal from '@/app/(components)/Modal'

function TaskDetails ({ params }) {
  const [task, setTask] = useState({ title: '', description: '' })
  const { getTask, updateTask } = useTodoContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateTask(task)
    console.log(res)
    setTask({ ...task, title: res.task.title, description: res.task.description })
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const selectedTask = await getTask(params.id)
      setTask(selectedTask)
      console.log(selectedTask)
    }
    fetchTasks()
  }, [params.id])

  if (!task.title) {
    return (
    <Modal>
      <div className='flex flex-col gap-5 bg-white text-black'>
        <h2>Loading...</h2>
      </div>
    </Modal>
    )
  }

  return (
  <Modal>
      <div className='flex flex-col gap-5 bg-white text-black'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='title'
            name='title'
            value={task.title}
            className='w-full p-2 text-lg'
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            id='description'
            name='description'
            value={task.description}
            className='w-full p-2 text-lg'
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <button type='submit'>Guardar</button>
        </form>
        <span>X</span>
      </div>
  </Modal>
  )
}

export default TaskDetails
