import EditTask from './(components)/editTask'
import MainTask from './(components)/mainTask'
import MainTaskBar from './(components)/mainTaskBar'
import Task from './(components)/task'
import TaskList from './(components)/taskList'

export default function Home () {
  return (
    <main className="flex w-[86vw] h-screen">
        <MainTask>
          <MainTaskBar />
          <TaskList>
            <Task> Esta es una tarea </Task>
          </TaskList>
          <EditTask />
        </MainTask>
    </main>
  )
}
