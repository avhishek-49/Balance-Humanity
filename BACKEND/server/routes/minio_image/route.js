"use strict";
const express = require("express");
const router = express.Router();
const uploadImage= require("../../modules/minio_image/upload_image.js");
const getImage= require("../../modules/minio_image/get_image.js");
(() => {

    let multer = require('multer');

    const storage = multer.diskStorage({
      destination: function(req, file, callback) {
        callback(null, `${__dirname}../../../../uploads`);
      },
      filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname)
      }
    });
    
    const upload = multer({ storage:storage})
    
    

router.post('/upload',upload.single('file'),uploadImage);
router.get('/get', getImage);

module.exports = router;

})();

