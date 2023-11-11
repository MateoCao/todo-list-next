import './globals.css'
import { AuthProvider } from './Providers'
import VerticalBar from './(components)/verticalBar'
import { TodoProvider } from './(context)/TodoListContext'

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <AuthProvider>
          <TodoProvider>
            <VerticalBar bg={'bg-slate-200'} />
            {children}
          </TodoProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
