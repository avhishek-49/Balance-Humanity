'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const districtsData = [
      { id: 1, name: 'Achham', latitude: 29.0396, longitude: 81.3131 },
      { id: 2, name: 'Arghakhanchi', latitude: 27.9828, longitude: 83.0363 },
      { id: 3, name: 'Baglung', latitude: 28.3683, longitude: 83.2934 },
      { id: 4, name: 'Baitadi', latitude: 29.5014, longitude: 80.648 },
      { id: 5, name: 'Bajhang', latitude: 29.7831, longitude: 81.5465 },
      { id: 6, name: 'Bajura', latitude: 29.6339, longitude: 81.2631 },
      { id: 7, name: 'Banke', latitude: 28.1466, longitude: 81.4237 },
      { id: 8, name: 'Bara', latitude: 27.1436, longitude: 85.0464 },
      { id: 9, name: 'Bardiya', latitude: 28.185, longitude: 81.3241 },
      { id: 10, name: 'Bhaktapur', latitude: 27.671, longitude: 85.4294 },
      { id: 11, name: 'Bhojpur', latitude: 27.1771, longitude: 87.0529 },
      { id: 12, name: 'Chitwan', latitude: 27.5345, longitude: 84.4486 },
      { id: 13, name: 'Dadeldhura', latitude: 29.2187, longitude: 80.5864 },
      { id: 14, name: 'Dailekh', latitude: 28.9216, longitude: 81.6377 },
      { id: 15, name: 'Dang', latitude: 27.9819, longitude: 82.3018 },
      { id: 16, name: 'Darchula', latitude: 29.8801, longitude: 80.7697 },
      { id: 17, name: 'Dhading', latitude: 27.9721, longitude: 84.8985 },
      { id: 18, name: 'Dhankuta', latitude: 26.9837, longitude: 87.3247 },
      { id: 19, name: 'Dhanusa', latitude: 26.8942, longitude: 86.0317 },
      { id: 20, name: 'Dholkha', latitude: 27.8156, longitude: 86.1553 },
      { id: 21, name: 'Dolpa', latitude: 29.1264, longitude: 83.0018 },
      { id: 22, name: 'Doti', latitude: 29.1737, longitude: 80.8987 },
      { id: 23, name: 'Gorkha', latitude: 28.286, longitude: 84.0305 },
      { id: 24, name: 'Gulmi', latitude: 28.0752, longitude: 83.2729 },
      { id: 25, name: 'Humla', latitude: 30.0511, longitude: 81.385 },
      { id: 26, name: 'Illam', latitude: 26.9124, longitude: 87.9216 },
      { id: 27, name: 'Jajarkot', latitude: 28.7366, longitude: 82.1997 },
      { id: 28, name: 'Jhapa', latitude: 26.6386, longitude: 87.8286 },
      { id: 29, name: 'Jumla', latitude: 29.2734, longitude: 82.1831 },
      { id: 30, name: 'Kailali', latitude: 28.8286, longitude: 80.5734 },
      { id: 31, name: 'Kalikot', latitude: 29.2128, longitude: 81.8227 },
      { id: 32, name: 'Kanchanpur', latitude: 28.8391, longitude: 80.3213 },
      { id: 33, name: 'Kapilvastu', latitude: 27.6454, longitude: 82.9828 },
      { id: 34, name: 'Kaski', latitude: 28.2622, longitude: 83.9998 },
      { id: 35, name: 'Kathmandu', latitude: 27.7172, longitude: 85.324 },
      { id: 36, name: 'Kavrepalanchok', latitude: 27.5142, longitude: 85.4966 },
      { id: 37, name: 'Khotang', latitude: 27.225, longitude: 86.8227 },
      { id: 38, name: 'Lalitpur', latitude: 27.6643, longitude: 85.3188 },
      { id: 39, name: 'Lamjung', latitude: 28.272, longitude: 84.3712 },
      { id: 40, name: 'Mahottari', latitude: 26.8932, longitude: 85.8079 },
      { id: 41, name: 'Makwanpur', latitude: 27.5325, longitude: 85.0464 },
      { id: 42, name: 'Manang', latitude: 28.6667, longitude: 84 },
      { id: 43, name: 'Morang', latitude: 26.6577, longitude: 87.4777 },
      { id: 44, name: 'Mugu', latitude: 29.9973, longitude: 82.1706 },
      { id: 45, name: 'Mustang', latitude: 28.9861, longitude: 83.8554 },
      { id: 46, name: 'Myagdi', latitude: 28.6098, longitude: 83.484 },
      { id: 47, name: 'Nawalparasi', latitude: 27.6522, longitude: 83.6743 },
      { id: 48, name: 'Nuwakot', latitude: 27.9252, longitude: 85.1425 },
      { id: 49, name: 'Okhaldhunga', latitude: 27.3582, longitude: 86.3616 },
      { id: 50, name: 'Palpa', latitude: 27.7881, longitude: 83.8622 },
      { id: 51, name: 'Panchthar', latitude: 27.2109, longitude: 87.8286 },
      { id: 52, name: 'Parbat', latitude: 28.2137, longitude: 83.676 },
      { id: 53, name: 'Parsa', latitude: 27.1473, longitude: 84.8556 },
      { id: 54, name: 'Pyuthan', latitude: 28.099, longitude: 82.8939 },
      { id: 55, name: 'Ramechhap', latitude: 27.363, longitude: 86.0637 },
      { id: 56, name: 'Rasuwa', latitude: 28.1593, longitude: 85.2379 },
      { id: 57, name: 'Rautahat', latitude: 27.0376, longitude: 85.3136 },
      { id: 58, name: 'Rolpa', latitude: 28.3918, longitude: 82.648 },
      { id: 59, name: 'Rukum', latitude: 28.7576, longitude: 82.4883 },
      { id: 60, name: 'Rupandehi', latitude: 27.5668, longitude: 83.4377 },
      { id: 61, name: 'Salyan', latitude: 28.3496, longitude: 82.1278 },
      { id: 62, name: 'Sankhuwasabha', latitude: 27.5723, longitude: 87.2096 },
      { id: 63, name: 'Saptari', latitude: 26.6159, longitude: 86.6953 },
      { id: 64, name: 'Sarlahi', latitude: 26.9824, longitude: 85.5612 },
      { id: 65, name: 'Sindhuli', latitude: 27.2515, longitude: 85.9803 },
      { id: 66, name: 'Sindhupalchok', latitude: 27.9659, longitude: 85.6319 },
      { id: 67, name: 'Siraha', latitude: 26.9149, longitude: 86.2032 },
      { id: 68, name: 'Solukhumbu', latitude: 27.6618, longitude: 86.6572 },
      { id: 69, name: 'Sunsari', latitude: 26.6366, longitude: 87.2281 },
      { id: 70, name: 'Surkhet', latitude: 28.6793, longitude: 81.8045 },
      { id: 71, name: 'Syangja', latitude: 28.0633, longitude: 83.8708 },
      { id: 72, name: 'Tanahu', latitude: 27.9441, longitude: 84.2279 },
      { id: 73, name: 'Taplejung', latitude: 27.6257, longitude: 87.7509 },
      { id: 74, name: 'Terhathum', latitude: 27.1986, longitude: 87.5024 },
      { id: 75, name: 'Udayapur', latitude: 26.8737, longitude: 86.7264 }
    ];

    // Insert data into the 'Districts' table
    await queryInterface.bulkInsert('latitude_longitude_district_info', districtsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove data from the 'Districts' table
    await queryInterface.bulkDelete('latitude_longitude_district_info', null, {});
  }
};
