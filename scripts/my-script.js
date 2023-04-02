// Get the buttons
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

// Get the articles
const article1 = document.querySelector('#article1');
const article2 = document.querySelector('#article2');
const article3 = document.querySelector('#article3');

// Add event listeners to buttons
button1.addEventListener('click', () => {
  toggleVisibility(article1);
});

button2.addEventListener('click', () => {
	toggleVisibility(article2);
});

button3.addEventListener('click', () => {
	toggleVisibility(article3);
});

// This functions toggles the visibility of param
function toggleVisibility(param) {

  // We get on computedStyle the value of .display
  const computedStyle = getComputedStyle(param);
  
  if (computedStyle.display === "none" ) {
    param.style.display = "inline-block";
  } else {
    param.style.display = "none";
  }
}