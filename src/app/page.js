import EditTask from './(components)/editTask'
import MainTask from './(components)/mainTask'
import MainTaskBar from './(components)/mainTaskBar'
import Task from './(components)/task'
import TaskList from './(components)/taskList'
import VerticalBar from './(components)/verticalBar'
import TaskCreator from './(components)/taskCreator'
import Header from './(components)/header'

export default function Home () {
  return (
        <MainTask className={"bg-[url('./(components)/(img)/montania.jpg')]"}>
          <Header className={"w-full h-[8vh]"}/>
          <div className='flex'>
            <VerticalBar className={'shadow bg-slate-200/75 h-[92vh] w-[4vw]'} />
            <div id='taskHome' className='flex flex-wrap flex-col h-[92vh] w-[96vw] justify-between py-8 items-center'>
              <MainTaskBar className={'w-7/12'}/>
              <TaskList bgTask={'bg-slate-200/75'} className={'w-7/12 h-[65vh] bg-slate-200/50 p-5'}>
                <Task bg={'bg-slate-200/75'}>  Esta es una tarea </Task>
                <Task bg={'bg-slate-200/75'}> Realizar cosas </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>
                <Task bg={'bg-slate-200/75'}> Gym </Task>

              </TaskList>
              <EditTask visible={true} /> { /* no funciona el true para activar editTask */}
              <TaskCreator className={`w-7/12`} />
            </div>
          </div>
        </MainTask>
  )
}
