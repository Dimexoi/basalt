import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"

type ImageType = {
  name: string,
  description: string
  slug: string
  coverImage: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log(body);
    const results = await prisma.project.create({
      data: {
        name: body.name,
        description: body.description,
        slug: body.slug,
        coverImage: body.images[0].coverImage,
        categoryId: Number(body.categoryId),
        images: {
            createMany: {
                data: body.images.map((image: ImageType) => (
                    {
                        name: image.name,
                        description: image.description,
                        slug: image.slug,
                        coverImage: image.coverImage
                    }
                ))
            }
        }
      }
    })
    
    return NextResponse.json(results)

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}