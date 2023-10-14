import EditTask from "./(components)/editTask";
import MainTask from "./(components)/mainTask";
import MainTaskBar from "./(components)/mainTaskBar";
import Task from "./(components)/task";
import TaskList from "./(components)/taskList";
import VerticalBar from "./(components)/verticalBar";

export default function Home () {
  return(
    <main className="flex w-full h-screen"> 
        <VerticalBar bg={"bg-slate-200"}> 
        </VerticalBar>
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
