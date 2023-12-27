"use strict";
let minioHelper = require("../../helpers/minio_helper");


let uploadImage = async (req,res)=>{
    let bucketName = process.env.BUCKET_NAME;
    // let bucketName = req.body.bucketName;
    let image = req.file
let bucketExists = await minioHelper.bucketExists(bucketName)
if(!bucketExists.status){
    let bucketName = await minioHelper.makeBucket(bucketName)
}

let metaData = {
    'Content-Type': 'application/octet-stream'
  }

try {
    let putIntoBucket = await minioHelper.putObject(bucketName,`${image.originalname}`, image.path, metaData)
if(putIntoBucket.status){
     return res.status(200).json(putIntoBucket);
}
return res.status(200).json(putIntoBucket);

} catch (error) {
    return res.status(400).json(error);

}

}

module.exports = uploadImage