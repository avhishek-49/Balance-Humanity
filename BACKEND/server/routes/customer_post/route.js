"use strict";
const express = require("express");
const router = express.Router();

const {protect, authorization} = require("../balance_humanity_unboard/index.js");
const {
    createCustomerPost,
    getMeCustomerPost,
    readAllCustomerPost,
    updateCustomerPost,
    deleteCustomerPost,
} = require("../../modules/customer_post/methods/index.js");

router.post("/create", protect, createCustomerPost);
router.get("/get-me", protect, getMeCustomerPost);
router.get("/get-all", protect, readAllCustomerPost);
router.put("/update", protect, updateCustomerPost);
router.delete("/delete", protect, deleteCustomerPost);

module.exports = router;
