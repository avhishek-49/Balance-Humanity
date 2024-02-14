"use strict";
const httpStatus = require("http-status");
const { createBalanceHumanitySql } = require("../sql");
const { balanceHumanityValidator } = require("./../helpers");
const { mailHelper } = require("./../../../helpers");
const { setValues, getValues, delValues } = require("../../../helpers/redis_helper_new");

(() => {
    module.exports = async (call, res) => {
        try {
            let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" };
            response = await balanceHumanityValidator.createUpdateValidator(call.body);
            if (response.status !== httpStatus.OK) {
                return res.status(400).json({ message: response.message });
            }


            if (!call.body.otp || call.body.otp == "") {
                const OTP = Math.floor(Math.random() * (999999 - 111111) + 111111); //generates 4 digits random key
                const message = {
                    subject: `OTP verification Message`,
                    details: {
                        message: ` Dear ${call.body.firstName} ,Your One-Time Password for secure access is:`,
                        value: OTP,
                    },
                    email: call.body.email,
                    type: "OTP",
                };

                let mailService = await mailHelper.send(message);
                if (mailService && mailService.status == true) {
                    await setValues(call.body.mobileNumber, mailService.OTP);
                    return res.status(200).send(`Otp send successfully to mail - ${message.email}`);
                }
            }
            if (call.body.otp && call.body.otp.length > 0) {
                let redisRes = await getValues(call.body.mobileNumber);

                if (!redisRes || parseInt(redisRes) != parseInt(call.body.otp)) {
                    return res.status(400).send("Invalid OTP sent");
                }
                await delValues(call.body.mobileNumber);



                let result = await createBalanceHumanitySql(call.body);

                if (result && result.status == httpStatus.OK) {
                    return res.status(200).json({ message: result.message });
                }

                if (result && result.status == httpStatus.BAD_REQUEST) {
                    return res.status(400).json({ message: result.message });
                }

            }
            return res.status(400).json({ error: "Data not found" })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
})();
