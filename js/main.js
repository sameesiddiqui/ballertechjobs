var backgrounds = [
  "url('img/hq/google_hq.jpg')",
  "url('img/hq/apple_hq.jpg')",
  "url('img/hq/microsoft_hq.jpg')",
  "url('img/hq/facebook_hq.jpg')",
  "url('img/hq/twitter_hq.jpg')",
  "url('img/hq/facebook_hq2.jpg')"
  // "img/hq/google_hq.jpg",
  // "img/hq/apple_hq.jpg",
  // "img/hq/microsoft_hq.jpg",
  // "img/hq/facebook_hq.jpg",
  // "img/hq/twitter_hq.jpg",
  // "img/hq/facebook_hq2.jpg"
];

// var images = [];
//
// function preload(){
//   for (var i=0; i<backgrounds.length; i++){
//     images[i] = new Image();
//     images[i].src = backgrounds[i];
//   }
// }
var check = true;
var slideIndex =-1;
// preload();
auto();

function auto() {
  if (check) {
  slideIndex+=1;
  carousel();
  setTimeout(auto, 8000);
}
}

function currentDiv(n) {
  if (check) {
  slideIndex = n;
  carousel();
}
}

function carousel() {
  var i;
  check = false;
  var x = document.getElementsByClassName("imageselect");

  if (slideIndex>=backgrounds.length){slideIndex=0}

  for (i=0; i< x.length; i++) {
    x[i].className = x[i].className.replace(" whitehover", "");
  }

  x[slideIndex].className += " whitehover";

  document.getElementsByClassName("header")[0].style.background = backgrounds[slideIndex];
  document.getElementsByClassName("header")[0].style.backgroundSize = "cover";
  document.getElementsByClassName("header")[0].style.backgroundPosition = "center";
  setTimeout(function(){
    check = true;
  }, 500);
}
