"use strict";
const express = require("express");
const router = express.Router();
const {registerBalanceHumanity} = require("./index");

(() => {
//unboarding customers
router.post('/register', registerBalanceHumanity);

module.exports = router;

})();

