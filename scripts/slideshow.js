var slideIndex = 0;
var timer = 0;

function nextSlides() {
  clearTimeout(timer);
  showSlides(++slideIndex);
}
function previousSlides() {
  clearTimeout(timer);
  showSlides(--slideIndex);
}
function showSlidesAt(n) {
  clearTimeout(timer);
  slideIndex = n;
  showSlides(n);
}
function startSlide() {
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex]) {
    slides[slideIndex].style.display = "block";
  }
  if (dots[slideIndex]) {
    dots[slideIndex].className += " active";
  }
  //   timer = setTimeout(nextSlides, 4000);
}
