import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getImage(key: string) {
  const region = process.env.AWS_REGION ?? 'default-region';
  const bucketName = process.env.BUCKET_NAME;

   const url = `https://${bucketName}.s3.${region}.amazonaws.com/${encodeURIComponent(key)}`
  return url;
}