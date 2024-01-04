"use strict";
const express = require("express");
const router = express.Router();
const transfer_balance= require("../../modules/balance_transfer_load/transfer_balance");
const auth_user = require('../../middleware/basicAuth.js')

//transfer balance to any specific user
router.post('/transfer',auth_user.auth_user,transfer_balance);


module.exports = router;


