'use server'

import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';



const s3Client = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,

    credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACESSS_KEY,
    },
})

async function uploadFileToS3(file, fileName) {
    const fileBuffer = await sharp(file)
    .jpeg({quality: 100})
    .toBuffer();

    const params = {
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: 'image/jpg'
    };

    const command = new PutObjectCommand(params);

    try {
        const response = await s3Client.send(command);
        console.log('Success Upload', response);
        return fileName;
    } catch (error) {
        throw error;
    }
}


export async function uploadFile(prevState, formData) {
    try {
        const files = formData.getAll('file');
        const uploadedFiles = [];

        for (const file of files) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = await uploadFileToS3(buffer, file.name);
            uploadedFiles.push(fileName);
        }

        revalidatePath('/');
        return { status: 'success', message: 'File has been uploaded.' }
    } catch (error) {
        return { status: 'error', message: 'Failed to upload files.' }
    }
}