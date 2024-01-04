"use strict";
const express = require("express");
const router = express.Router();
const transfer_balance= require("../../modules/balance_transfer_load/transfer_balance");
const load_balance= require("../../modules/balance_transfer_load/load_balance.js");
const auth_user = require('../../middleware/basicAuth.js')

//transfer balance to any specific user
router.post('/transfer',auth_user.auth_user,transfer_balance);
router.post('/load',auth_user.auth_user,load_balance);


module.exports = router;


