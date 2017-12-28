(function(){

  let playerName = document.getElementById("playername"); 
  let contactForm = document.getElementById("contact-form");
  
  contactForm.addEventListener("submit", formAlertBox);
  
  function formAlertBox(ev) 
  {
	alert("Thank you " + playerName.value + "!, we will get back to you soon");
    ev.preventDefault();
  }
  
}());