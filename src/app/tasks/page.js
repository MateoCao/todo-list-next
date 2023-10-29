'use client'

import { useEffect } from 'react'

function Tasks () {
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetch('api/tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        console.log(tasks)
      } catch (error) {
        console.log('Error: ', error)
      }
    }
    getTasks()
  })
  return (
        <>

        </>
  )
}

export default Tasks
