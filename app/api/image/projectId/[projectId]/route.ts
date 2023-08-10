import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"


export async function GET(request: Request, { params }: { params: { projectId: number } }) {
  try {
    const images = await prisma.image.findMany({
      where: { projectId: params.projectId },
    });

    
    return NextResponse.json(images)

  } catch (err) {
    console.log(err);
    return NextResponse.json({error: err})
  }
};