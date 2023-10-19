import { authOptions } from '@/lib/auth';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"

export async function GET(request: NextRequest) {
  try {

    const session = await getServerSession(authOptions)

    if (session) {

      if(process.env.AWS_BUCKET_NAME) {
        const searchParams = request.nextUrl.searchParams
        const file = searchParams.get('file')
        const fileType = searchParams.get('fileType')
        if(file && fileType) {

          const s3Client = new S3Client({})
  
          const post = await createPresignedPost(s3Client, {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: file,
            Fields: {
              acl: 'public-read',
              'Content-Type': fileType,
            },
            Expires: 600, // seconds
            Conditions: [
              ['content-length-range', 0, 20971520], // up to 20 MB
            ],
          });

          return NextResponse.json({ success: true, message: "Done", post }, {status: 200});
        } else {
          return NextResponse.json({ error: "url query not find"}, {status: 503});
        }

      } else {
        return NextResponse.json({ error: "Bucket Name not found"}, {status: 503});
      }
    } else {

      return NextResponse.json({ error: "Not signed in"}, {status: 401});
    }
  } catch (error) {
    throw(error)
  }
}