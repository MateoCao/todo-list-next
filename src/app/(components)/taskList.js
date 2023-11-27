'use client'

import TaskCreator from './taskCreator'
import Pagination from './pagination'
import Task from './task'
import { useTodoContext } from '../(context)/TodoListContext'
import { useEffect } from 'react'

export default function TaskList ({ children, bgBody, bgTask, bgHeaderAndFooter, width, height }) {
  const widthOption = width || 'w-7/12'
  const heightOption = height || 'h-5/6'
  const bgDefault = ''

  const { getTasks, todoList } = useTodoContext()

  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks()
    }
    fetchTasks()
  }, [])

  return (
        <section id='taskList' className={`flex flex-wrap ${heightOption} ${widthOption} flex-col rounded-xl justify-between`}>
            <TaskCreator className={`${bgHeaderAndFooter || bgDefault}`} taskColor={bgTask}/>
            <div id="tasksContainer" className={`${bgBody || bgDefault} rounded-xl drop-shadow-lg flex justify-center flex-wrap p-5 w-full content-start gap-2 grow`}>
                { children }
                {todoList?.map((task) => (
                  <Task task={task} taskTitle={task.title} key={task._id} />
                ))}
            </div>
            <Pagination className={`${bgHeaderAndFooter || bgDefault}`}/>
        </section>
  )
}
