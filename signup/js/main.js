var backgrounds = [
  "url('img/hq/facebook_hq.jpg')",
  "url('img/hq/google_hq.jpg')",
  "url('img/hq/airbnb_hq.jpg')",
  "url('img/hq/microsoft_hq.jpg')",
  "url('img/hq/tesla_hq.jpg')"
];

var slideIndex =-1;
auto();

function auto() {
  carousel(slideIndex +=1);
  setTimeout(auto, 8000);
}

function currentDiv(n) {
  carousel(slideIndex=n);
}

function carousel(num) {
  if (num>=backgrounds.length){slideIndex=0}

  document.getElementsByClassName("hero")[0].style.background = backgrounds[slideIndex];
  document.getElementsByClassName("hero")[0].style.backgroundSize = "cover";
  document.getElementsByClassName("hero")[0].style.backgroundPosition = "center";
}
