let currentFont = 1.4;

const makeBigger = () => {
currentFont+=0.2
setFont();
};

const makeSmaller = () => {
  currentFont-=0.2
  setFont();
};

const setFont =() =>{
  document.querySelector('h1').style.fontSize = `${currentFont}em`;
  document.querySelector('.content').style.fontSize = `${currentFont}em`;
}

document.getElementById("a1").addEventListener("click", makeBigger);
document.getElementById("a2").addEventListener("click", makeSmaller);
