import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function POST(req: Request) {
  try {
    const results = await prisma.project.findMany({
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