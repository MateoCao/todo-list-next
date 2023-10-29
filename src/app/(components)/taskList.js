import TaskCreator from './taskCreator'

export default function TaskList ({ children, bg, width }) {
  const widthOption = width || 'w-7/12'
  const bgDefault = 'bg-slate-200'

  return (
        <section id='taskList' className={`${bg || bgDefault} flex flex-wrap h-5/6 ${widthOption} flex-col rounded-xl justify-between`}>
            <div className="rounded-xl drop-shadow-lg flex justify-center flex-wrap p-5 h-5/6 w-full content-start gap-2">
                { children }
            </div>
            <TaskCreator />
        </section>
  )
}
