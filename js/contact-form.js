(function(){

  let playerName = document.getElementById("playername"); //variable that holds the entered player name
  let contactForm = document.getElementById("contact-form"); //variable that holds a reference to the contact form
  
  contactForm.addEventListener("submit", formAlertBox); //attaches an event listener to the contactForm variable, which calls the formAlertBox when submit is pressed
  
  function formAlertBox(ev) 
  {
	alert("Thank you " + playerName.value + "!, we will get back to you soon"); //an alert pops up, acknowledging the users submitted form
    ev.preventDefault();
  }
  
}());