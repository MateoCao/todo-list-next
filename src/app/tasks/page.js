'use client'

import { useEffect } from 'react'
import { useTodoContext } from '../(context)/TodoListContext'

function Tasks () {
  const { getTasks } = useTodoContext()
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()
      console.log(tasks)
    }
    fetchTasks()
  })
  return (
        <>

        </>
  )
}

export default Tasks
