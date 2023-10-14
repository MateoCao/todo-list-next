'use client'
import { useSession } from 'next-auth/react'

function Login () {
  const { data: session, status } = useSession()

  console.log(session, status)
  return (
        <h1>
            LOGIN
        </h1>
  )
}

export default Login
