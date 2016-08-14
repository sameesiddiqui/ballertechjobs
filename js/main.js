var backgrounds = [
  "url('img/facebook_hq.jpg')",
  "url('img/google_hq.jpg')",
  "url('img/tesla_hq.jpg')",
  "url('img/microsoft_hq.jpg')",
  "url('img/airbnb_hq.jpg')"
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
  var i;
  var x = document.getElementsByClassName("imageselect");
  if (num>=backgrounds.length){slideIndex=0}

  for (i=0; i< x.length; i++) {
    x[i].className = x[i].className.replace(" whitehover", "");
  }

  x[slideIndex].className += " whitehover";
  document.getElementsByClassName("header")[0].style.background = backgrounds[slideIndex];
  document.getElementsByClassName("header")[0].style.backgroundSize = "cover";
  document.getElementsByClassName("header")[0].style.backgroundPosition = "0% 20%";
}
