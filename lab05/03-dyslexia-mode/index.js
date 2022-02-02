/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaToggle = () => {
  var current = document.querySelector("body").classList.value;
  if (current !== "dyslexia-mode") {
    document.querySelector("body").classList = "dyslexia-mode";
  } else {
    document.querySelector("body").classList = "";
  }
};

document
  .getElementById("dyslexia-toggle")
  .addEventListener("click", dyslexiaToggle);
