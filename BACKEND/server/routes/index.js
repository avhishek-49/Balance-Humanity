"use strict";
const express = require("express");
const router = express.Router();


//unboarding customers
const unboarding = require("./balance_humanity_unboard/route");
router.use('/customer', unboarding);

module.exports = router;
