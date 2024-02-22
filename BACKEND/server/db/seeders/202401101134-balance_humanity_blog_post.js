"use strict";
const {v4} = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
      try {
          await queryInterface.sequelize.query(`start transaction;`);

          await queryInterface.bulkDelete("balance_humanity_blog_post", null, {});
          await queryInterface.bulkInsert(
              "balance_humanity_blog_post",
              [
                  {
                      id: 1,
                      uuid: v4(),
                      customer_id: 'c1b2a3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
                      description: 'Example description 1',
                      image_name: 'image1.jpg',
                      status: true,
                      created_at: Date.now(),
                      updated_at: Date.now(),
                      
                    },
                    {
                      id: 2,
                      uuid: v4(),
                      customer_id: 'd4e5f6g7-h8i9-j0k1-l2m3n4o5p6',
                      description: 'Example description 2',
                      image_name: 'image2.jpg',
                      status: true,
                      created_at: Date.now(),
                      updated_at: Date.now(),
                    },
                    {
                      id: 3,
                      uuid: v4(),
                      customer_id: 'e5f6g7h8-i9j0-k1l2-m3n4o5p6',
                      description: 'Example description 3',
                      image_name: 'image3.jpg',
                      status: true,
                      created_at: Date.now(),
                      updated_at: Date.now(),
                    },
                    {
                      id: 4,
                      uuid: v4(),
                      customer_id: 'f6g7h8i9-j0k1-l2m3-n4o5p6q7r8',
                      description: 'Example description 4',
                      image_name: 'image4.jpg',
                      status: true,
                      created_at: Date.now(),
                      updated_at: Date.now(),
                    },
                    {
                      id: 5,
                      uuid: v4(),
                      customer_id: 'g7h8i9j0-k1l2-m3n4o5p6q7r8s9',
                      description: 'Example description 5',
                      image_name: 'image5.jpg',
                      status: true,
                      created_at: Date.now(),
                      updated_at: Date.now(),
                    },
              ],
              {}
          );
          await queryInterface.sequelize.query(`commit;`);
      } catch (error) {
          console.log(error);
          await queryInterface.sequelize.query(`rollback;`);
      }
      return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("balance_humanity_blog_post", null, {});
  },
};
