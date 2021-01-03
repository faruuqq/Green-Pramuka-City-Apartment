$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000
  });
});

var modal = document.getElementById("myModal");
var queryImage = document.querySelectorAll(".carousel-image").length;
for (var i = 0; i < queryImage; i++) {
  document.querySelectorAll(".carousel-image")[i].addEventListener("click", function () {

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function () {
  modal.style.display = "none";
};