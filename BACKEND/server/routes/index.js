"use strict";
const express = require("express");
const router = express.Router();


//unboarding customers
const unboarding = require("./balance_humanity_unboard/route");
router.use('/customer', unboarding);


//image functionalities
const image = require("./minio_image/route.js");
router.use('/image', image);

//Balance transfer and load routes
const balance = require("./balance_transfer/route.js");
router.use('/balance', balance);

module.exports = router;