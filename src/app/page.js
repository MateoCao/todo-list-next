// import EditTask from './(components)/editTask'
import MainTask from './(components)/mainTask'
import MainTaskBar from './(components)/mainTaskBar'
import TaskList from './(components)/taskList'

export default function Home () {
  return (
      <main className="flex w-full h-screen">
          <MainTask className={"bg-[url('./(components)/(img)/montania.jpg')]"}>
            <MainTaskBar />
            <TaskList bgTask={'bg-slate-200/50'} bgBody={''} bgHeaderAndFooter={'bg-slate-200/50'} />
            {/* <EditTask visible={false} /> */}
          </MainTask>
      </main>
  )
}
