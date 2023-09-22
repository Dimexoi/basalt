import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

async function uploadImageToS3(
  file: Buffer,
  fileName: string
): Promise<string> {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: file,
    ContentType: "image", // Change the content type accordingly
  };

  const command = new PutObjectCommand(params);
  const s3Data = await s3Client.send(command);
  return params.Key;
}

export async function POST(request: NextRequest, response: NextResponse): Promise<NextResponse | undefined>{
  try {
    const formData = await request.formData()
    const file = formData.get("file") as Blob | null
    const name: string | null = formData.get('name') as unknown as string
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadImageToS3(
      buffer,
      name
    );

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    NextResponse.json({ message: "Error uploading image" });
  }
}