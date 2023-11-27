'use client'

import Task from './task'
import { useTodoContext } from '../(context)/TodoListContext'
import { useEffect } from 'react'

export default function TaskList ({ children, className }) {
  const bgDefault = ''

  const { getTasks, todoList } = useTodoContext()

  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks()
    }
    fetchTasks()
  }, [])

  if (!todoList) return <>Loading...</>

  return (
        <section id='taskList' className={`${className} flex flex-wrap flex-col rounded-xl justify-start `}>
            <div id="tasksContainer" className={'rounded-xl drop-shadow-lg flex justify-center flex-wrap w-full content-start gap-2 grow overflow-x-auto'}>
                { children }
                {todoList?.map((task) => (
                  <Task task={task} key={task._id} />
                ))}
            </div>
        </section>
  )
}
