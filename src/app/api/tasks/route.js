import { NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import { Task } from '@/models/taskSchema.js'
import { validateTask } from '@/validationsSchemas/taskValidationSchema.js'

export async function GET (req) {
  try {
    await connectDB()
    const id = req.user.id ? req.user.id : req.user.payload
    const tasks = await Task.find({
      user: id
    }).populate('user')
    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Error in getAll:', error)
    return NextResponse.json(['Internal Server Error'], { status: 500 })
  }
}
