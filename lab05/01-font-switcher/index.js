const makeBigger = () => {
  var h1 = document.querySelector("h1");
  var styleH1 = window.getComputedStyle(h1, null).getPropertyValue("font-size");
  var currentSizeH1 = parseInt(styleH1);
  currentSizeH1 += 5;
  h1.style.fontSize = currentSizeH1 + "px";
  var p = document.querySelector("p");
  var styleP = window.getComputedStyle(p, null).getPropertyValue("font-size");
  var currentSizeP = parseInt(styleP);
  currentSizeP += 5;
  p.style.fontSize = currentSizeP + "px";
};

const makeSmaller = () => {
  var h1 = document.querySelector("h1");
  var styleH1 = window.getComputedStyle(h1, null).getPropertyValue("font-size");
  var currentSizeH1 = parseInt(styleH1);
  currentSizeH1 -= 5;
  h1.style.fontSize = currentSizeH1 + "px";
  var p = document.querySelector("p");
  var styleP = window.getComputedStyle(p, null).getPropertyValue("font-size");
  var currentSizeP = parseInt(styleP);
  currentSizeP -= 5;
  p.style.fontSize = currentSizeP + "px";
};

document.getElementById("a1").addEventListener("click", makeBigger);
document.getElementById("a2").addEventListener("click", makeSmaller);
