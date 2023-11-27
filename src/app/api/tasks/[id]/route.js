import { cookies } from 'next/headers'
import { connectDB } from '@/libs/mongodb'
import { NextResponse } from 'next/server'
import { Task } from '@/models/taskSchema'

export async function GET (req, { params }) {
  const cookiesStore = cookies()
  const userId = cookiesStore.get('userId')
  if (userId) {
    try {
      await connectDB()
      const task = await Task.findById(params.id)
      return NextResponse.json(task)
    } catch (error) {
      console.error('Error in getAll:', error)
      return NextResponse.json(['Internal Server Error'], { status: 500 })
    }
  } else {
    return NextResponse.json(['No autorizado'], { status: 401 })
  }
}
