import prisma from "@/lib/prisma"
import * as bcrypt from 'bcrypt'

interface RequestBody {
  username: string
  password: string
}

export async function POST(request:Request) {
  const body: RequestBody = await request.json()
  console.error(body);

  const user = await prisma.user.create({
    data: {
      userName: body.username,
      password: await bcrypt.hash(body.password, 10)
    }
  })

  const { password, ...result} = user
  return new Response(JSON.stringify(result))
}