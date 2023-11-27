'use client'

import { useEffect, useState } from 'react'
import { useTodoContext } from '../(context)/TodoListContext'

function TaskDetails ({ params }) {
  const [task, setTask] = useState()
  const { getTasks } = useTodoContext()
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()
      const selectedTask = tasks.filter(t => t._id === params.id)
      setTask(selectedTask[0])
    }
    fetchTasks()
  }, [])
  if (!task) return <>Loading...</>
  return (
        <section className='bg-white w-[500px]'>
            <h1 className='text-black'>{task._id}</h1>
            <p className='text-black'>{task.title}</p>
        </section>
  )
}

export default TaskDetails
