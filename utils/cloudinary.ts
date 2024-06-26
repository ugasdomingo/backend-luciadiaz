import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.CLOUD_API_KEY as string,
    api_secret: process.env.CLOUD_API_SECRET as string,
    secure: true,
});

export async function uploadPostImage(filePath: any) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Lucia/Posts',
    });
}

export async function uploadFormationImage(filePath: any) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Lucia/Formaciones',
    });
}

export async function uploadBookImage(filePath: any) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Lucia/Libros',
    });
}

export async function uploadPaymentProof(filePath: any) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Lucia/Comprobantes',
    });
}

export async function deleteImage(image: any) {
    return await cloudinary.uploader.destroy(image?.public_id);
}
