import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.host,
      user: process.env.username,
      password: process.env.password,
      database: process.env.database,
      dialect: process.env.dialect,
    });

    console.log(`Database Connected successfully on ${new Date()}`);
    return connection;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default createConnection;
