"use strict";
const httpStatus = require("http-status");
const {longitudeLatitudeHelper,mysqlHelper}= require("./../../../helpers");
(() => {
module.exports = async (call,res) => {
    try {
        let response = {status: httpStatus.BAD_REQUEST, data: null,message: "Data Not found"};


         let userInfo = await mysqlHelper.format(`select * from db_balance_humanity.balance_humanity_users where uuid = "${call.body.user.uuid}"`)
         let [userResult] = await mysqlHelper.query(userInfo);

         if(userResult && userResult.length >0)
         {
            let nearestDistrict = await longitudeLatitudeHelper.fetchNearestDistricts(userResult[0].district_id);
            console.log("dfsf",nearestDistrict);


            //

         }




    



        if (response.status !== httpStatus.OK) {
            return res.status(400).json({ status: httpStatus.BAD_REQUEST,message: response.message });
            // return response;
        }
        return res.status(200).json({status: httpStatus.OK, data: response.data });
        // return response;
    } catch (error) {
        return res.status(200).json({status: httpStatus.BAD_REQUEST, message: error.message});

    }
};
})();
