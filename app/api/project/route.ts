import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"

export const revalidate = 0

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {id} = body
    const results = await prisma.project.findMany({
      where: {
        categoryId: Number(id)
      },
      include: {
        images: true,
        category: true
      }
    })
  
    return NextResponse.json(results)

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}