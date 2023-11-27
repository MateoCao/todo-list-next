'use client'

import { useContext } from 'react'
import TaskCreator from './taskCreator'
import { Context } from '../(context)/context'
import Pagination from './pagination'

export default function TaskList ({ children, bgBody, bgTask, bgHeaderAndFooter, width, height }) {
  const widthOption = width || 'w-7/12'
  const heightOption = height || 'h-5/6'
  const bgDefault = ''

  const { lsTask } = useContext(Context)

  return (
        <section id='taskList' className={`flex flex-wrap ${heightOption} ${widthOption} flex-col rounded-xl justify-between`}>
            <TaskCreator className={`${bgHeaderAndFooter || bgDefault}`} taskColor={bgTask}/>
            <div id="tasksContainer" className={`${bgBody || bgDefault} rounded-xl drop-shadow-lg flex justify-center flex-wrap p-5 w-full content-start gap-2 grow`}>
                {children}
                { lsTask.map((tsk) => (<> {tsk.component} </>)) }
            </div>
            <Pagination className={`${bgHeaderAndFooter || bgDefault}`}/>
        </section>
  )
}
