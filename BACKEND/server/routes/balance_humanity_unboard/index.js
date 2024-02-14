"use strict";

module.exports = {
login: require("../../modules/survival_customer_onboard/methods/login_balance_humaity"),
registerBalanceHumanity: require("../../modules/survival_customer_onboard/methods/register_balance_humanity_user"),
forgotPassword: require("../../modules/survival_customer_onboard/methods/forgot_password_balance_humanity"),
getCustomerInfo: require("../../modules/survival_customer_onboard/methods/get_customer_info"),

protect: require("../../middleware/protect.js"),
authorization: require("../../middleware/authorization.js"),

getCustomerInfoForKyc: require("../../modules/kyc/methods/read.js"),
verifyCustomerKyc: require("../../modules/kyc/methods/update.js"),
createCustomerKyc: require("../../modules/kyc/methods/create.js"),
deleteCustomerKyc: require("../../modules/kyc/methods/delete.js"),
};
