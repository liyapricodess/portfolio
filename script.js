//wait until page is fully loaded
//modular function to generate a time-based greeting
//retrieve the current minute of the day
//create logic/time-based greeting 

document.addEventListener('DOMContentLoaded', () => {
//the const variable 'button' and 'output' stores the 
//elements with the id : 'hello-button' and 'output' 
//which therefore makes them accessible to manipulate
//in the js file using the DOM
  const button = document.getElementById('hello-button');
  const output = document.getElementById('output');

  button.addEventListener('click', () => {
//the const variable message stores the visitor - 
//these are modulor function calls
//allows to print the greeting message
  
  
const message = generateGreeting('Visitor');
displayMessage(message);


});
});

//modular function to generate time-based greeting
function generateGreeting(name) {
  const hour = new Date().getHours();
  let timeGreeting;
  //the logic for the time-based greeting is added
  if (hour > 12) {
    timeGreeting = 'Hello! Good Day!';//message will display when hour is greater than 12
  } else if (hour < 12) {
    timeGreeting = 'Hello! Good Morning!';//message will display when hour is less than 12
  } else {
    timeGreeting = 'Hello! Good Afternoon!';//message will display when hour is ...
  }

  return `${timeGreeting} ${name}`;
}

//modular function to update DOM
function displayMessage(message) {
  const output = document.getElementById('output');
  output.innerText = message;
  output.style.fontWeight = 500;
  output.style.color = 'lightblue';
}

function clearMessage() {
  const output = document.getElementById('output');
  output.textContent = '';
  output.style.fontWeight = 400;
  output.style.color = black;
}













// function () {
//     //button is retrieved by ID
//     const button = document.getElementById('hello-button');
    
//     //when button is clicked, a pop-up will appear
//     button.addEventListener('click', function () {
//       alert('Message viewed');
//     });