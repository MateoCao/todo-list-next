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
  const [expiredTasks, setExpiredTasks] = useState()

  // Obtener tareas

  const getTasks = async (bool) => {
    try {
      const tasks = await API.getTasks()
      // const filteredTasks = tasks.filter(task => task.completed === bool)
      // console.log('FITLRO', filteredTasks)
      return tasks
    } catch (error) {
      console.error('Error al cargar las tareas:', error)
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
      //   console.log('asd', task)
      //   const index = expiredTasks.findIndex(t => t._id === task._id)
      //   if (index !== -1) {
      //     const newExpiredTasks = expiredTasks.filter(t => t._id !== task._id)
      //     setExpiredTasks(newExpiredTasks)
      //   }
      // }
      // if (!task.expired) {
      //   console.log(completedTasks)
      //   const index = completedTasks.findIndex(t => t._id === task._id)
      //   console.log('asasdd')
      //   if (index !== -1) {
      //     console.log('asd')
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
