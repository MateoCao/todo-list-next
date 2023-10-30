import { NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import { Task } from '@/models/taskSchema.js'
import { validateTask } from '@/validationsSchemas/taskValidationSchema.js'
import { cookies } from 'next/headers'

export async function GET () {
  const cookiesStore = cookies()
  const userId = cookiesStore.get('userId')
  if (userId) {
    try {
      await connectDB()
      const id = userId.value
      const tasks = await Task.find({
        user: id
      }).populate('user')
      return NextResponse.json(tasks)
    } catch (error) {
      console.error('Error in getAll:', error)
      return NextResponse.json(['Internal Server Error'], { status: 500 })
    }
  } else {
    return NextResponse.json(['No autorizado'], { status: 401 })
  }
}

export async function POST (req) {
  const cookiesStore = cookies()
  const userId = cookiesStore.get('userId')
  const task = await req.json()
  try {
    const result = validateTask(task)
    const user = userId.value

    if (!result.success) {
      return NextResponse.json({ error: JSON.parse(result.error.message) }, { status: 400 })
    }

    const newTask = new Task({
      ...result.data,
      user
    })
    await newTask.save()

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    console.error('Error in create:', error)
    return NextResponse.json(['Internal Server Error'], { status: 500 })
  }
}
