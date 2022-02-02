/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultStyle = () => {
  document.querySelector("body").classList = "default";
};

const desertStyle = () => {
  document.querySelector("body").classList = "desert";
};

const oceanStyle = () => {
  document.querySelector("body").classList = "ocean";
};

const highContrastStyle = () => {
  document.querySelector("body").classList = "high-contrast";
};

document.getElementById("default").addEventListener("click", defaultStyle);
document.getElementById("desert").addEventListener("click", desertStyle);
document.getElementById("ocean").addEventListener("click", oceanStyle);
document
  .getElementById("high-contrast")
  .addEventListener("click", highContrastStyle);
