const handleButtonClick = () => {
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
    chrome.runtime.openOptionsPage();
  } else {
    console.log('Extension context not available');
  }
};

const handleButtonKeyDown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleButtonClick();
  }
};

const initWelcomePage = () => {
  const welcomeButton = document.querySelector('.welcome-button');
  
  if (welcomeButton) {
    welcomeButton.addEventListener('click', handleButtonClick);
    welcomeButton.addEventListener('keydown', handleButtonKeyDown);
  }
};

document.addEventListener('DOMContentLoaded', initWelcomePage);

