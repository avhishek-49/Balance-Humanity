
const showPopup = (message, color) => {
    // Create and show the popup with the provided message and color
    const popup = document.createElement('div');
    popup.innerText = message;
    popup.style.backgroundColor = color;
    popup.style.color = 'white';
    popup.style.position = 'fixed';
    popup.style.top = '10px';
    popup.style.right = '10px';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px';
    popup.style.width = '200px';
    popup.style.textAlign = 'center'; // Center the text
    document.body.appendChild(popup);
  
    // Hide the popup after 3 seconds
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 3000);
  };
  
  export default showPopup;
  