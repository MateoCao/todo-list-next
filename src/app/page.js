import EditTask from "./(components)/editTask";
import MainTask from "./(components)/mainTask";
import MainTaskBar from "./(components)/mainTaskBar";
import TaskList from "./(components)/taskList";
import VerticalBar from "./(components)/verticalBar";

export default function Home () {
  return(
    <main className="flex w-full h-screen"> 
        <VerticalBar bg={"bg-slate-200"}> 
        </VerticalBar>
        <MainTask>
          <MainTaskBar />
          <TaskList />
          <EditTask />
        </MainTask>
    </main>
  )
}
