// "use strict";
// (()=>
// {

//     const {mysqlHelper} =require("./../../../helpers");

//     // respose format ...........


//     let basequery = 
//     `SELECT uuid, customer_pin, password,email,mobile_number,
//     case when customer_type= 1 then "NormalCustomer"
//     when customer_type = 2 then "VictimCustomer"
//     when customer_type = 3 then "superCustomer" 
//     end as customerType 


//      FROM db_balance_humanity.balance_humanity_users WHERE 1=1 `

// let paramsQuery = ""

//      if(params.number )
//      {
//         paramsQuery = mysqlHelper.format(`AND mobile_number = ?`,[parms.number])
//      }


//      let limitQuery = `order by id desc limit ${params.limit} offset .......`

//      mainQury = basequery+paramsQuery

//      let formatResponse = mysqlHelper.format(mainQury);
//      let [result] = mysqlHelper.query(mainQury)



// })
// ();