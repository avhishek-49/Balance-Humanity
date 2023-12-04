"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createCustomerSql } = require("./../sql");

const createCustomer = async (req, res) => {
  try {
    
    // Assuming you have password and other necessary data in req.body
    const { password, ...otherData } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Include other properties needed for SQL creation
    const createObj = {
      ...otherData,
      password: hashedPassword,
      // Include other properties needed for SQL creation
    };

    // Call the SQL function to create a new customer
    const createdCustomer = await createCustomerSql(createObj);

    // Generate JWT token
    const token = generateJwtToken(createdCustomer.id);

    res.json({ message: "Customer created successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to generate JWT token
const generateJwtToken = (userId) => {
  // Replace "your_secret_key" with your actual secret key
  const secretKey = "your_secret_key";

  // Token expiration time (1 hour in this example)
  const expiresIn = "1h";

  // Generate the JWT token
  const token = jwt.sign({ userId }, secretKey, { expiresIn });

  return token;
};

module.exports = createCustomer;
