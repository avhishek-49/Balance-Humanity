

((jwtTokenGeneratorHelper) => {
    'use strict';
  
    const jwt = require('jsonwebtoken');

    const dotenv = require("dotenv");
     dotenv.config();
  
    jwtTokenGeneratorHelper.generateJWTAccessToken = (userId, expiryTime) => {
      const token = jwt.sign(
        {
          user: userId,      },
          process.env.ACCESS_TOKEN_SECRET_KEY,
        {
          algorithm: process.env.AUTH_HASH_ALGORITHM,
          expiresIn: "7h", // expires in given hours
        }
      );
      return {
        success: true,
        token: token,
        userInfo: userId,
      };
    };

    jwtTokenGeneratorHelper.generateJWTRefreshToken = (userId, expiryTime) => {
      const token = jwt.sign(
        {
          user: userId,      },
          process.env.ACCESS_TOKEN_SECRET_KEY,
        {
          algorithm: process.env.AUTH_HASH_ALGORITHM,
          expiresIn: "10d", // expires in given hours
        }
      );
      return {
        success: true,
        token: token,
        userInfo: userId,
      };
    };


  
    jwtTokenGeneratorHelper.verifyJWTToken = (token,key) => {
      try {
        return new Promise((resolve, reject) => {
          jwt.verify(token, key, { algorithm: process.env.AUTH_HASH_ALGORITHM }, (err, decoded) => {
            if (err) {
              return resolve({ success: false, message: err.name });
            }
            return resolve({ success: true, data: decoded });
          });
        });
      } catch (err) {
        throw err;
      }
    };
  
  
    jwtTokenGeneratorHelper.generateJwtAuthToken = (signObject, expiryTime) => {
      const token = jwt.sign(
        signObject,
        process.env.TOKEN_SECRET,
        {
          algorithm: process.env.AUTH_HASH_ALGORITHM,
          expiresIn: expiryTime || process.env.AUTH_TOKEN_EXPIRES, // expires in given hours
        }
      );
      return {
        success: true,
        token: token
      };
    };
  
  })(module.exports);
  