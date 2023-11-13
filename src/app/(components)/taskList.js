'use client'

import Task from './task'
import { useTodoContext } from '../(context)/TodoListContext'
import { useEffect } from 'react'

export default function TaskList ({ children, className }) {
  const bgDefault = ''

  const { getTasks, todoList, setTodoList } = useTodoContext()

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()

      setTodoList(tasks)
    }
    fetchTasks()
  }, [])

  return (
        <section id='taskList' className={`${className} flex flex-wrap flex-col rounded-xl justify-start `}>
            <div id="tasksContainer" className={`rounded-xl drop-shadow-lg flex justify-center flex-wrap w-full content-start gap-2 grow overflow-x-auto`}>
                { children }
                {todoList?.map((task) => (
                  <Task task={task} taskTitle={task.title} key={task._id} />
                ))}
            </div>
        </section>
  )
}
