"use strict";
const express = require("express");
const router = express.Router();
const {registerBalanceHumanity, forgotPassword , login } = require("./index");

(() => {
//unboarding customers
router.post('/login',login);
router.post('/register', registerBalanceHumanity);
router.post('/forgot-password', forgotPassword);
router.get('/get-customer', forgotPassword);


module.exports = router;

})();

