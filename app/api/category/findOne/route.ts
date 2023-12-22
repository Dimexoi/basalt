import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {id} = body

    const category = await prisma.category.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        projects: {
          include: {
            images: true
          }
        }
      }
    });



    
    return NextResponse.json(category)

  } catch (err) {
    console.log(err);
    return NextResponse.json({error: err})
  }
};