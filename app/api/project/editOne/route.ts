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
        const updateProject = prisma.project.update({
          where: {
            id: body.id
          },
          data: {
            name: body.name,
            description: body.description,
            slug: body.slug,
            coverImage: body.images[0].coverImage,
            categoryId: Number(body.categoryId)
          }
        })

        const operations = []

        operations.push(updateProject)

        for (const image of body.images) {
          operations.push(prisma.image.update({
            where: {
              id: image.id
            }, 
            data: {
              name: image.name,
              description: image.description,
              slug: image.slug,
              coverImage: image.coverImage,
              link: image.link
            }
          }))
        }

        const update = await prisma.$transaction(operations)

        return NextResponse.json({ success: true, message: "Done", update }, {status: 200});
    } else {
      return NextResponse.json({ success: false, message: "Not signed in"}, {status: 401});
    }
    

  } catch (err) {
    console.log(err)
    return NextResponse.json({success: false, error: err})
  }
}