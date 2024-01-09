"use strict";
const express = require("express");
const router = express.Router();
const uploadImage = require("../../modules/minio_image/upload_image.js");
const getImage = require("../../modules/minio_image/get_image.js");
const getImageUrl = require("../../modules/minio_image/get_image_url.js");
const fetchImageUrl = require("../../modules/minio_image/get_presigned_image.js");
const removeBucket = require("../../modules/minio_image/remove_bucket.js");

let multer = require("multer");
const {protect, authorization} = require("../balance_humanity_unboard/index.js");
const getAllImage = require("../../modules/minio_image/get_all_image.js");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, `${__dirname}../../../../uploads`);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

const upload = multer({storage: storage});

router.post("/upload", upload.single("file"), protect, uploadImage);
router.get("/get", protect, getImage);
router.get("/get-all", protect, getAllImage);
router.delete("/bucket-remove", protect, authorization(["superCustomer"]), removeBucket);

router.get("/geturl", getImageUrl); //not use
router.get("/fetch-image", fetchImageUrl); //not use

module.exports = router;
