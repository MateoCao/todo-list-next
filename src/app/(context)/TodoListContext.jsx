'use client'

import { createContext, useContext, useState } from 'react'
import { API } from '../(utils)/apiTasks.js'

const TodoContext = createContext()

export const useTodoContext = () => {
  return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [expiredTasks, setExpiredTasks] = useState([])

  // Obtener tareas

  const getTasks = async () => {
    try {
      const tasks = await API.getTasks()
      // const filteredTasks = tasks.filter(task => task.completed === bool)
      // console.log('FITLRO', filteredTasks)
      setTodoList(tasks)
      return tasks
    } catch (error) {
      console.error('Error al cargar las tareas:', error)
    }
  }

  const getTask = async (id) => {
    try {
      const res = await API.getTask(id)
      const task = await res.json()
      return task
    } catch (error) {
      console.error('Error al carga la tarea:', error)
    }
  }

  // Crear una tarea

  const sendTask = async (task) => {
    const response = await API.sendTask(task)
    if (response.ok) {
      const data = await response.json()
      task._id = data._id
      const newTodoList = [...todoList, task]
      setTodoList(newTodoList)
      return data
    } else {
      console.error('Error al crear la tarea')
    }
  }

  const updateTask = async (task) => {
    console.log(task)
    const response = await API.updateTask(task)
    if (response.ok) {
      console.log('xd')
    }
  }

  // Completar una tarea

  const moveTaskToCompleted = async (task) => {
    const response = await API.updateCompletedTasks(task)
    if (response.ok) {
      const newTodoList = todoList.filter(item => item._id !== task._id)
      setTodoList(newTodoList)
    } else {
      console.error('Error al completar la tarea')
    }
  }

  // Eliminar una tarea

  const deleteTask = async (task) => {
    const response = await API.deleteTask(task)
    if (response.ok) {
      const newTodoList = todoList.filter(t => t._id !== task._id)
      setTodoList(newTodoList)

      // Validación para actualizar el array de tareas correcto.
      // if (task.expired) {
      //   const index = expiredTasks.findIndex(t => t._id === task._id)
      //   if (index !== -1) {
      //     const newExpiredTasks = expiredTasks.filter(t => t._id !== task._id)
      //     setExpiredTasks(newExpiredTasks)
      //   }
      // }
      // if (!task.expired) {
      //   const index = completedTasks.findIndex(t => t._id === task._id)
      //   if (index !== -1) {
      //     const newCompletedTasks = completedTasks.filter(t => t._id !== task._id)
      //     setCompletedTasks(newCompletedTasks)
      //   }
      // }
    }
  }

  return (
    <TodoContext.Provider value={{
      todoList,
      completedTasks,
      expiredTasks,
      moveTaskToCompleted,
      setTodoList,
      getTasks,
      getTask,
      sendTask,
      setCompletedTasks,
      deleteTask,
      setExpiredTasks,
      updateTask
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
