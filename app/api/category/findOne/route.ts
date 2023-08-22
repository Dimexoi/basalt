import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function POST(req: Request) {
  try {
    const categoryId = await req.json()
    const images = await prisma.category.findUnique({
      where: {
        id: Number(categoryId)
      },
      include: {
        projects: {
          include: {
            images: true
          }
        }
      }
    });

    
    return NextResponse.json(images)

  } catch (err) {
    console.log(err);
    return NextResponse.json({error: err})
  }
};