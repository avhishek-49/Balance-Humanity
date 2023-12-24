"use strict";
let minioHelper = require("../../helpers/minio_helper")

let uploadImage = async (req,res)=>{
    let bucketName = req.body.bucketName;
    let image = req
let bucketExists = await minioHelper.bucketExists(bucketName)
if(!bucketExists){
    let bucketName = await minioHelper.makeBucket(bucketName)
}
let date = new Date().getTime();

let metaData = {
    'Content-Type': 'application/octet-stream'
  }

try {
    let putIntoBucket = await minioHelper.putObject(bucketName,`${date}`, image, metaData)
if(putIntoBucket.status){
     return res.status(200).json(putIntoBucket);
}
return res.status(200).json(putIntoBucket);

} catch (error) {
    return res.status(400).json(error);

}

}

module.exports = uploadImage