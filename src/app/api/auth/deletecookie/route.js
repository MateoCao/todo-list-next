import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST () {
  try {
    cookies().delete('userId')
    return NextResponse.json(['Cookie deleted'], { status: 200 })
  } catch (error) {
    NextResponse.json(['Error when deleting cookie'], { status: 400 })
  }
}
