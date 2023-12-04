'use strict';
// const createConnction = require("./../../../db/database_config")

const connect = async () => {
  const connection = await createConnction();

  let insertObj={
    uuid: createObj.uuid, 
    last_name: createObj.last_name,
    email: createObj.email,
    mobile_number: createObj.mobile_number,
    password: createObj.password,
    salt: createObj.salt,
    is_active: createObj.is_active,
    is_delete: createObj.is_delete,
    customer_type: createObj.customer_type,
    is_blocked: createObj.is_blocked,
    login_date: createObj.login_date,
    created_date: createObj.created_date,
    update_date: createObj.update_date,
    updated_by: createObj.updated_by,
    created_by: createObj.created_by,
  }

  const [rows, fields] = await connection.execute("insert into test_database.balance_humanity set (?)",insertObj);
  console.log(rows);
};



