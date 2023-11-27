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
      console.log('TAREAS', tasks)
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
  if (userId) {
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
  } else {
    return NextResponse.json('No autorizado', { status: 403 })
  }
}

export async function PATCH (req) {
  const task = await req.json()
  await connectDB()
  try {
    const updatedTask = await Task.findByIdAndUpdate(task._id, task)
    if (!updatedTask) return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 })
    return NextResponse.json({ updatedTask }, { status: 200 })
  } catch (error) {
    return NextResponse.json(['Error al actualizar tarea'], { status: 400 })
  }
}

export async function DELETE (req) {
  const params = req.nextUrl.searchParams
  const id = params.get('id')
  console.log(id)
  await connectDB()
  try {
    const deletedTask = await Task.findByIdAndDelete(id)
    if (!deletedTask) return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 })
    return NextResponse.json({ status: 204 })
  } catch (error) {
    return NextResponse.json(['Error al eliminar tarea'], { status: 400 })
  }
}
