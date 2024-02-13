import axios from 'axios';

const handleRequest = async (baseUrl, endpoint, method, requestBody) => {
  try {
    const url = `${baseUrl}${endpoint}`;
    console.log(`Attempting ${method} request to ${url}:`, requestBody);

    const response = await axios[method.toLowerCase()](url, requestBody);

    console.log('Response from server:', response);
    if (response.status === 400) {
      // Display bad request error message from backend
      console.error('Bad Request Error:', response.data);
      console.log('Error Message:', response.data.message);
      // Assuming `showPopup` and `navigateToHome` are defined globally
      showPopup(response.data.message, 'red');
    } else if (response.status === 200) {
      // Display success message
      showPopup(response.data.message, 'green');
      navigateToHome();
    }
  } catch (error) {
    console.error('Error during request:', error);
    // Display error message
    showPopup('Request Failed', 'red');
  }
};

export default handleRequest;
