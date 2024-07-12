import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Readable } from "stream";

export async function getImage(key: string) {
const s3Client: S3Client = new S3Client({
    region: process.env.AWS_REGION ?? 'default-region',  // Replace 'default-region' with a sensible default or error handling
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? 'default-access-key-id',  // Replace 'default-access-key-id' with a sensible default or error handling
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? 'default-secret-access-key'  // Replace 'default-secret-access-key' with a sensible default or error handling
    }
  });
  
  const bucketName = process.env.BUCKET_NAME;
  
  const streamToBuffer = (stream: Readable): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  };
  
  const getObject = async () => {
    const { Body } = await s3Client.send(
      new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );
  
    if (Body instanceof Readable) {
      const buffer = await streamToBuffer(Body);
      return buffer.toString('base64');
    }
  };
  return await getObject();
  }