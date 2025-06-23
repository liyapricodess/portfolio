//wait until page is fully loaded
document.addEventListener('DOMContentLoaded', 
  function () {
    //button is retrieved by ID
    const button = document.getElementById('hello-button');
    
    //when button is clicked, a pop-up will appear
    button.addEventListener('click', function () {
      alert('Message viewed');
    });
  });