import EditTask from "../(components)/editTask"
import MainTask from "../(components)/mainTask";
import MainTaskBar from "../(components)/mainTaskBar";
import Task from "../(components)/task";
import TaskList from "../(components)/taskList";
import VerticalBar from "../(components)/verticalBar";
import { ContextProvider } from "../(context)/context";


export default function Home () {
  return(
    <ContextProvider>
      <main className="flex w-full h-screen"> 
          <VerticalBar bg={"bg-slate-200"} /> 
          <MainTask>
            <MainTaskBar />
            <TaskList width="w-[23%]" height={'h-[35vh]'}>
              <Task> Esta es una tarea </Task>
              <Task> Realizar cosas </Task>
            </TaskList>
            <TaskList width="w-[23%]" height={'h-[35vh]'}>
              <Task> Esta es una tarea </Task>
              <Task> Realizar cosas </Task>
            </TaskList>
            <TaskList width="w-[23%]" height={'h-[35vh]'}>
              <Task> Esta es una tarea </Task>
              <Task> Realizar cosas </Task>
            </TaskList>
            <TaskList width="w-[23%]" height={'h-[35vh]'}>
              <Task> Esta es una tarea </Task>
              <Task> Realizar cosas </Task>
            </TaskList>
            <EditTask visible={false} />
          </MainTask>
      </main>
    </ContextProvider>
  )
}
