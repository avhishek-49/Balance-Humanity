"use strict";
const express = require("express");
const router = express.Router();
const {
registerBalanceHumanity,
forgotPassword,
login,
getCustomerInfo,
verifyCustomerKyc,
createCustomerKyc,
getCustomerInfoForKyc,
deleteCustomerKyc,
authorization,
protect,
getDistrictDropDown,
loadBalance,
transaction
} = require("./index");
(() => {
//unboarding customers
router.post("/login", login);
router.post("/register", registerBalanceHumanity);
router.post("/forgot-password", protect, forgotPassword);
router.get("/get-district_dropdown", getDistrictDropDown);
router.get("/get-customer", protect, authorization(["superCustomer"]), getCustomerInfo);

//balance load and uload part
router.post("/load-balance", protect, loadBalance);
router.post("/transaction", protect, transaction);


//kyc part
router.delete("/delete-customer-kyc", protect, authorization(["superCustomer"]), deleteCustomerKyc);
router.get("/get-customer-kyc", protect, authorization(["superCustomer"]), getCustomerInfoForKyc);
router.put("/verify-customer-kyc", protect, authorization(["superCustomer"]), verifyCustomerKyc);
router.post("/create-customer-kyc", protect, createCustomerKyc);

module.exports = router;
})();
