"use strict";
let minioHelper = require("../../helpers/minio_helper");
const { createCustomerBucket } = require("../customer_bucket/methods");


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
    let request = {
        body :{
            customer_id : req.body.customer_id,
            image_name : image.originalname,
            bucket_name: req.body.bucketName
        }
    }
    let customerBucket = await createCustomerBucket(request);
    if(customerBucket.status == 200)
    {
     return res.status(200).json(putIntoBucket);
    }
    return res.status(400).json({message: "couldnot update the customer bucket log"});

}
return res.status(200).json(putIntoBucket);

} catch (error) {
    return res.status(400).json(error);

}

}

module.exports = uploadImage