"use strict";
const express = require("express");
const router = express.Router();
const {registerBalanceHumanity, forgotPassword } = require("./index");

(() => {
//unboarding customers
router.post('/register', registerBalanceHumanity);
router.post('/forgot-password', forgotPassword);


module.exports = router;

})();

