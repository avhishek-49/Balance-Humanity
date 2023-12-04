const express = require("express");
const router = express.Router();
const { createAbilty } = require("./index.js");

router.post("/", createAbilty);

module.exports = router;
