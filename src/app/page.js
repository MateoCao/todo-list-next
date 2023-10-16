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
          <TaskList width="full">
            <Task> Esta es una tarea </Task>
            <Task> Realizar cosas </Task>
            <Task> Gym </Task>
            <Task> Soy una nueva taskk </Task>
          </TaskList>
          <EditTask visible={false} />
        </MainTask>
    </main>
  )
}
