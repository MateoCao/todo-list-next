import EditTask from "./(components)/editTask";
import MainTask from "./(components)/mainTask";
import MainTaskBar from "./(components)/mainTaskBar";
import Task from "./(components)/task";
import TaskList from "./(components)/taskList";
import VerticalBar from "./(components)/verticalBar";
import { ContextProvider } from "./(context)/context";

export default function Home () {
  return(
    <ContextProvider>
      <main className="flex w-full h-screen"> 
          <VerticalBar /> 
          <MainTask className={"bg-[url('./(components)/(img)/montania.jpg')]"}>
            <MainTaskBar />
            <TaskList bgTask={"bg-slate-200/50"} bgBody={""} bgHeaderAndFooter={"bg-slate-200/50"}>
              <Task bg={"bg-slate-200/50"}>  Esta es una tarea </Task>
              <Task bg={"bg-slate-200/50"}> Realizar cosas </Task>
              <Task bg={"bg-slate-200/50"}> Gym </Task>
            </TaskList>
            <EditTask visible={false} />
          </MainTask>
      </main>
    </ContextProvider>
  )
}
