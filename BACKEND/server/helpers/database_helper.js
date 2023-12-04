'use-strict';
const mysql = require('mysql2/promise');

((connection) => {
  let dbClient = null;
  let tranConn = null;

  connection.init = async () => {
    try {
      if (!dbClient) {
        dbClient = await mysql.createPool({
            host: process.env.host,
            user: process.env.username,
            password: process.env.password,
            database: process.env.database,
        
        });

        console.log('MySQL connection pool initialized successfully!');
      }
      return dbClient;
    } catch (error) {
      console.error('Error at databaseHelper connection.init', error);
      throw error;
    }
  };

  connection.getConnection = async () => {
    try {
      if (!tranConn) tranConn = await dbClient.getConnection();
      return tranConn;
    } catch (error) {
      console.error('Error at databaseHelper connection.getConnection', error);
      throw error;
    }
  };

  connection.execute = (query, fields) => {
    try {
      let res = (tranConn || dbClient).query(query, fields);
      (tranConn || dbClient).query('commit');
      return res;
    } catch (error) {
      console.error('Error at databaseHelper connection.query', error);
      throw error;
    }
  };

  connection.query = async (query, fields, metaData) => {
    try {
      let res = (tranConn || dbClient).query(query, fields);
      (tranConn || dbClient).query('commit');
      return res;
    } catch (error) {
      console.error('Error at databaseHelper connection.query', error);
      throw error;
    }
  };

  connection.format = (query, args) => {
    try {
      return dbClient.format(query, args);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.js connection.format', error);
      throw error;
    }
  };


  // ... (rest of the functions) ...

})(module.exports);
