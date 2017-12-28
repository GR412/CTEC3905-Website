(function(){

  let menuButton = document.getElementById("three-lines"); //variable that holds a reference to the three lines id
  let navMenu = document.getElementById("top-nav"); //variable that holds a reference to the top-nav id

  menuButton.addEventListener("click", toggleMenu); //attaches an event listener to the menuButton variable, which calls the toggleMenu function when the three lines is clicked

  let toggle = false; // menu is initially hidden
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();