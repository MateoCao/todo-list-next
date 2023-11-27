import './globals.css'
import { AuthProvider } from './Providers'
import { TodoProvider } from './(context)/TodoListContext'

export default function RootLayout (props) {
  return (
    <html lang="en">
      <body className="flex">
        <AuthProvider>
          <TodoProvider>
            <VerticalBar bg={'bg-slate-200'} />
            {props.children}
            {props.modal}
          </TodoProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
