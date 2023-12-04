const express = require("express");
const router = express.Router();
const { registerBalanceHumanity } = require("./index.js");

router.post("/", registerBalanceHumanity);

module.exports = router;
