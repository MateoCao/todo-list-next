'use client'
import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [lsTask, setlsTask] = useState([])

  return (
        <Context.Provider
            value={{
              colorI: 'blue-gray-50',
              colorII: 'blue-gray-100',
              colorIII: 'blue-gray-200',
              colorIV: 'blue-gray-300',
              colorV: 'blue-gray-400',
              colorVI: 'blue-gray-500',
              colorVII: 'blue-gray-600',
              colorVIII: 'blue-gray-700',
              colorX: 'blue-gray-900',
              lsTask,
              setlsTask
            }}
        >
            {children}
        </Context.Provider>
  )
}
