import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getImage(key: string) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION ?? 'default-region',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? 'default-access-key-id',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? 'default-secret-access-key'
    }
  });

  console.log("s3Client: ", s3Client)

  const bucketName = process.env.BUCKET_NAME;

  console.log("BucketName: ", bucketName)

  // Create a signed URL that expires after a set period, e.g., 60 minutes
  const url = await getSignedUrl(s3Client, new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  }), { expiresIn: 3600 });

  console.log("URL: ", url)

  return url;
}