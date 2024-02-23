"use strict";
let minioHelper = require("../../helpers/minio_helper");
const httpStatus = require("http-status");
const mysqlHelper=require("./../../helpers/database_helper");
const dotenv = require("dotenv");
dotenv.config()
let uploadImage = async (req, res) => {
    // let bucketName = process.env.BUCKET_NAME;
    let bucketName = "imageshumanity"
        let image = req.file;
    let bucketExists = await minioHelper.bucketExists(bucketName);
    if (!bucketExists.status) {
        let bucketName = await minioHelper.makeBucket(bucketName);
    }

    try {
        let uploadImage = await minioHelper.uploadToSpecificBucket(bucketName, image);
        if (uploadImage.status == 200) {

            let userInfo = await mysqlHelper.format(`select  * from db_balance_humanity.balance_humanity_users where uuid ="${req.body.user.uuid}"`);
            let [userResult] = await mysqlHelper.query(userInfo);
            if(userResult && userResult.length >0)
            {


                let customerPost =
                {
                    customer_id:req.body.user.uuid,
                    description:req.body.description,
                    image_minio_url:`http://127.0.0.1:9000/${bucketName}/${uploadImage.data.info.fileName}`,
                    remarks:"smudge",
                    is_active:1,
                    is_deleted:0,
                    district_name:userResult[0].district_id,
                    created_date:new Date().getTime(),
                    updated_at:null
                }


                let executeQuery = await mysqlHelper.format(`INSERT INTO db_balance_humanity.balance_humanity_blog_post set ? `,[customerPost]);
                let [executeResult] = await mysqlHelper.query(executeQuery);

            if(executeResult && executeResult.affectedRows> 0)
            {
                return res.status(200).json({message:"customer post uploaded successfully"});
            }
            }    
        }

    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = uploadImage;
