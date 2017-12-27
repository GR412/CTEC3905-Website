
(function(){

  let imagePreview = document.querySelector("#gallery-preview img");
  let imageThumbnail = document.getElementById("gallery-thumbnails");

  imageThumbnail.addEventListener("click", imageChanger);

  function imageChanger(e) {
    imagePreview.src=e.target.src;
  }

})();

