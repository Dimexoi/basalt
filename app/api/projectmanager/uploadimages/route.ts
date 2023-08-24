import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File
	const slug: String | null = data.get('slug') as unknown as String
	const name: String | null = data.get('name') as unknown as String
  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location

	if (!existsSync(`./public/images/projects/${slug}`)){
    mkdirSync(`./public/images/projects/${slug}`)
  }
  writeFileSync(`./public/images/projects/${slug}/${name}`, buffer)

  return NextResponse.json({ success: true })
}