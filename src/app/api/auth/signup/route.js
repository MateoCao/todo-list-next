import { NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import { User } from '@/models/userSchema'
import { validateUser } from '@/validationsSchemas/userValidationSchema'
import zod from 'zod'
import bcrypt from 'bcryptjs'

export async function POST (request) {
  try {
    const result = await request.json()
    const validatedResult = validateUser(result)
    const { username, email, password } = validatedResult

    await connectDB()
    const userFoundByEmail = await User.findOne({ email })
    if (userFoundByEmail) {
      return NextResponse.json(['El email ya se encuentra registrado'], { status: 400 })
    }

    const userFoundByUsername = await User.findOne({ username })
    if (userFoundByUsername) {
      return NextResponse.json(['El nombre de usuario ya se encuentra registrado'], { status: 400 })
    }

    const passwordEncrypted = await bcrypt.hash(password, 10)

    if (result.error) {
      return NextResponse.json({ message: JSON.parse(result.error.message) }, { status: 400 })
    }

    const user = new User({
      username,
      email,
      password: passwordEncrypted
    })

    const savedUser = await user.save()

    return NextResponse.json({
      username,
      email,
      creadtedAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt
    },
    {
      status: 201
    })
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return NextResponse.json(
        {
          message: error.issues[0].message
        },
        {
          status: 400
        }
      )
    }
    console.error('Error in register:', error)
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}
