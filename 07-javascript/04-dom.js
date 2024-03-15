// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.getElementById("output");

// add an event listener on the target element
copyButton.addEventListener("click", () => {
  // Copy the value from the input to the output div
  outputDiv.textContent = userInput1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const outputDiv2 = document.getElementById("output");

// add an event listener on the target element
userInput2.addEventListener("input", () => {
  // Copy the value from the input to the output div as the user types
  outputDiv2.textContent = userInput2.value;
});

// callback function to handle event
