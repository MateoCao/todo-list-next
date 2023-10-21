import './globals.css'
import { AuthProvider } from './Providers'
import VerticalBar from './(components)/verticalBar'

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <AuthProvider>
          <VerticalBar bg={'bg-slate-200'} />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
