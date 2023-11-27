'use client'

import { useEffect, useState } from 'react'
import { useTodoContext } from '@/app/(context)/TodoListContext'

function TaskDetails ({ params }) {
  const [task, setTask] = useState()
  const { getTask } = useTodoContext()
  useEffect(() => {
    const fetchTasks = async () => {
      const selectedTask = await getTask(params.id)
      setTask(selectedTask)
      console.log(selectedTask)
    }
    fetchTasks()
  }, [])
  if (!task) {
    return (
    <section className='bg-white w-[500px]'>
      <h2>
        Loading...
      </h2>
    </section>
    )
  }
  return (
    <section className='bg-white w-[500px]'>
      <h1 className='text-black'>{task._id}</h1>
      <p className='text-black'>{task.title}</p>
    </section>
  )
}

export default TaskDetails
