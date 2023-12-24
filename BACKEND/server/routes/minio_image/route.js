"use strict";
const express = require("express");
const router = express.Router();
const uploadImage= require("../../modules/minio_image/upload_image.js");
const getImage= require("../../modules/minio_image/get_image.js");
(() => {
//unboarding customers
router.post('/upload',uploadImage);
router.get('/get', getImage);

module.exports = router;

})();

