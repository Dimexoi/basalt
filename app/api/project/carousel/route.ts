import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function GET() {
  try {
    const results = await prisma.carousel.findMany({
      include: {
        project: true
      }
    })

    console.log(results);
    
    return NextResponse.json(results)

  } catch (err) {
    console.log(err);
    return NextResponse.json({error: err})
  }
};