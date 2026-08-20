import { NextResponse } from "next/server";
import {
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

export const runtime = "nodejs";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const bucketName = process.env.R2_BUCKET_NAME!;

export async function GET() {
  console.log("R2_BUCKET_NAME:", process.env.R2_BUCKET_NAME);
  console.log("R2_ACCOUNT_ID:", process.env.R2_ACCOUNT_ID);
  console.log(
    "R2_ACCESS_KEY_ID var mı:",
    !!process.env.R2_ACCESS_KEY_ID
  );
  console.log(
    "R2_SECRET_ACCESS_KEY var mı:",
    !!process.env.R2_SECRET_ACCESS_KEY
  );

  try {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
      })
    );

    const files = (response.Contents || []).map((object) => ({
      key: object.Key,
      size: object.Size,
    }));

    return NextResponse.json({
      success: true,
      bucket: bucketName,
      files,
    });
  } catch (error) {
    console.error("R2 test hatası:", error);

    return NextResponse.json(
      {
        success: false,
        error: "R2 bağlantısı başarısız",
      },
      { status: 500 }
    );
  }
}