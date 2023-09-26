const generateButton = document.getElementById('generateButton');
const randomNumberDisplay = document.getElementById('randomNumberDisplay');

function generateRandomNumber() {

    const randomNum = Math.floor(Math.random() * 6) + 1;


    randomNumberDisplay.textContent = `You Got a: ${randomNum}`;
}

generateButton.addEventListener('click', generateRandomNumber);
