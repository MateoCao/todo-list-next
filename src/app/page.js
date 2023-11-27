import MainTask from './(components)/mainTask'
import MainTaskBar from './(components)/mainTaskBar'
import TaskList from './(components)/taskList.js'
import TaskCreator from './(components)/taskCreator'
import Header from './(components)/header'

export default function Home () {
  return (
        <MainTask className={"bg-[url('./(components)/(img)/montania.jpg')]"}>
          <Header className={'w-full h-[8vh]'}/>
          <div className='flex'>
            <div id='taskHome' className='flex flex-wrap flex-col h-[calc(100vh-13vh)] w-[96vw] justify-between items-center'>
              <MainTaskBar className={'w-7/12'}/>
              <TaskList bgTask={'bg-slate-200/75'} className={'w-7/12 h-[65vh] bg-slate-200/50 p-5'}>

              </TaskList>
              {/* <EditTask visible={true} /> no funciona el true para activar editTask */}
              <TaskCreator className={'w-7/12'} />
            </div>
          </div>
        </MainTask>
  )
}
