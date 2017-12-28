
(function(){

  let imagePreview = document.querySelector("#gallery-preview img"); //not sure how this works
  let imageThumbnail = document.getElementById("gallery-thumbnails"); //variable that holds a reference to the gallery-thumbnails id

  imageThumbnail.addEventListener("click", imageChanger); //attaches an event listener to the imageThumbnail variable, which calls the imageChanger function when an thumbnail image is clicked

  function imageChanger(e) {
    imagePreview.src=e.target.src; //not sure how this works
  }

})();

