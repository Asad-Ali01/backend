import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import { ApiError } from './ApiError.js';
import { ApiResponse } from './ApiResponse.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath,  {
            resource_type: "auto"
        })
        // IF successfully uploaded on cloudinary then we will delete the local file
        fs.unlinkSync(localFilePath);
        // file has been uploaded  successfully
        // console.log("File is uploaded on cloudinary ",response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed
        return null; 
    }
}

const deleteFromCloudinary = async(public_id) => {
    if (!public_id) return;
    try {
       const res = await cloudinary.uploader.destroy(public_id,{
            invalidate: true
        })
       return res;
    } catch (error) {
        console.log("Cloudinary delete error: ",error);
        throw new ApiError(500,"Failed to delete file from cloudinary");
    }
}

export {uploadOnCloudinary,deleteFromCloudinary}