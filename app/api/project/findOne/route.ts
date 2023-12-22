import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {id} = body
    const results = await prisma.project.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        images: true
      }
    })
    
    return NextResponse.json(results)

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}