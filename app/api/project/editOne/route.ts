import { NextResponse } from "next/server"

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

import prisma from "@/lib/prisma"

type ImageType = {
  name: string,
  description: string
  slug: string
  coverImage: string
  link: string
  id: number
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (session) {

        const body = await req.json()
        const results = await prisma.project.update({
          where: {
            id: body.id
          },
          data: {
            name: body.name,
            description: body.description,
            slug: body.slug,
            coverImage: body.images[0].coverImage,
            categoryId: Number(body.categoryId),
            images: {
              update: body.images.map((image: ImageType) => ({
                where: image.id,
                data: {
                  name: image.name,
                  description: image.description,
                  slug: image.slug,
                  coverImage: image.coverImage,
                  link: image.link
                }
              }))
            }
          }
        })
        return NextResponse.json({ success: true, message: "Done", results }, {status: 200});
    } else {
      return NextResponse.json({ error: "Not signed in"}, {status: 401});
    }
    

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}