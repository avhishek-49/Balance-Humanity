"use strict";
let minioHelper = require("../../helpers/minio_helper");
const {createCustomerBucket} = require("../customer_bucket/methods");
const {createBucketImageList} = require("../bucket_list_object/methods");

let uploadImage = async (req, res) => {
    // let bucketName = process.env.BUCKET_NAME;
    let bucketName = req.body.bucketName;

    let image = req.file;
    let bucketExists = await minioHelper.bucketExists(bucketName);
    if (!bucketExists.status) {
        let bucketName = await minioHelper.makeBucket(bucketName);
    }

    let metaData = {
        "Content-Type": "image/png",
    };

    try {
        let putIntoBucket = await minioHelper.putObject(bucketName, `${image.originalname}`, image.path, metaData);
        if (putIntoBucket.status) {
            let request = {
                body: {
                    customer_id: req.body.customer_id,
                    // image_name : image.originalname,
                    bucket_name: req.body.bucketName, //bucket name must be unique so use email as bucket name
                },
            };
            let customerBucket = await createCustomerBucket(request);
            if (customerBucket.status == 200) {
                request.body.image_name = image.originalname;
                request.body.image_type = req.body.image_type;
                let bucketImageList = await createBucketImageList(request);
                if (bucketImageList.status == 200) {
                    return res.status(200).json({bucketImageList: bucketImageList, putIntoBucket: putIntoBucket});
                }
                return res.status(400).json({message: "Could not update the bucket image list"});
            }
            return res.status(400).json({message: "Could not update the customer bucket"});
        }
        return res.status(200).json(putIntoBucket);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = uploadImage;
