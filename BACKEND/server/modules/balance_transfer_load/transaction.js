"use strict";
const httpStatus = require("http-status");
const { mysqlHelper } = require("../../helpers");
(() => {
    module.exports = async (call, res) => {
        try {


            let existingtoaccountNumber = await mysqlHelper.format(`select * from db_balance_humanity.customer_account_information where account_number = ${call.body.toAccountNumber}   `)
            let [existingtoaccountNumberRes] = await mysqlHelper.query(existingtoaccountNumber);

            if (existingtoaccountNumberRes && existingtoaccountNumberRes.length <= 0) {
                return res.status(400).json({ status: httpStatus.BAD_REQUEST, message: "Invalid to accountNumber!" });

            }

            let userInfo = await mysqlHelper.format(`select * from db_balance_humanity.balance_humanity_users where uuid = "${call.body.user.uuid}"`)
            let [userResult] = await mysqlHelper.query(userInfo);

            if (userResult && userResult.length < 0) {
                return res.status(400).json({ status: httpStatus.BAD_REQUEST, message: "user doesnt exist!" });

            }

            if (userResult && userResult.length > 0) {


                let existingAmount = await mysqlHelper.format(`select * from db_balance_humanity.customer_account_information where customer_id = ${userResult[0].id}   `)
                let [existingAmountResult] = await mysqlHelper.query(existingAmount);
                if (existingAmountResult && existingAmountResult.length > 0) {

                    let fromAccountNumber = parseInt(existingAmountResult[0].account_number)

                    if(fromAccountNumber == call.body.toAccountNumber)
                    {
                        return res.status(400).json({ status: httpStatus.BAD_REQUEST, message: "from account number and to account number cannt be same" });
    
                    }
                    let existingAmountReal = await mysqlHelper.format(`select * from db_balance_humanity.customer_account_information where account_number = ${fromAccountNumber}   `)
                    let [existingAmountRealResult] = await mysqlHelper.query(existingAmountReal);

                    if (existingAmountRealResult && existingAmountRealResult.length > 0) {

                        // fromaccount amount
                        let reductAmount = parseInt(existingAmountRealResult[0].amount)


                        // toAccount amount
                        let toBeAddedNumber = parseInt(existingtoaccountNumberRes[0].amount)


                        //final reduceAmount of fromAccount
                        let toBeSubFromAccountAmount = reductAmount - parseInt(call.body.amount);

                        // final addedAmount of toAccountNumber
                        let toBeaddFromAccountAmount = toBeAddedNumber + parseInt(call.body.amount);


                        let subtract = await mysqlHelper.format(`
                      update db_balance_humanity.customer_account_information set amount = "${toBeSubFromAccountAmount}" where account_number = ${fromAccountNumber}
  
                  
                      `)

                        let [subtractRes] = await mysqlHelper.query(subtract);



                        let add = await mysqlHelper.format(`
                      update db_balance_humanity.customer_account_information set amount = "${toBeaddFromAccountAmount}" where account_number = ${call.body.toAccountNumber}
  
                  
                      `)

                        let [addResult] = await mysqlHelper.query(add);



                        if (subtractRes && addResult && subtractRes.affectedRows > 0 && addResult.affectedRows > 0) {

                            const logdataTransaction = {

                                customer_id: userResult[0].id,
                                from_account_number: fromAccountNumber,
                                to_account_number: call.body.toAccountNumber,
                                mobile_number: userResult[0].mobile_number,
                                amount: parseInt(call.body.amount),
                                date: new Date().getTime(),
                                is_deleted: false,
                                is_active: true,
                                status: 'sucess',
                                transaction_payload: JSON.stringify(call.body),
                                createdAt: new Date().getTime(),
                                updatedAt: new Date().getTime()
                            };



                            let logInsert = await mysqlHelper.format(`
                      INSERT into db_balance_humanity.transactions set ?
                      `, [logdataTransaction])

                            let [logInsertRes] = await mysqlHelper.query(logInsert);

                            if (logInsertRes && logInsertRes.affectedRows > 0) {
                                return res.status(200).json({ status: httpStatus.OK, data: "Transaction Success!!!" ,responseData:JSON.stringify(logdataTransaction) });

                            }

                        }


                    }



                }
            }


            return res.status(400).json({ status: httpStatus.BAD_REQUEST, data: "Failed Transaction" });



            // return response;
        } catch (error) {
            return res.status(200).json({ status: httpStatus.BAD_REQUEST, message: "data not found" });

        }
    };
})();
