console.log("Initialising console");


// document.getElementById("myBtn1").onclick = function() {toggleVisibility("artic1")};
// document.getElementById("myBtn2").onclick = function() {toggleVisibility("artic2")};
// document.getElementById("myBtn3").onclick = function() {toggleVisibility("artic3")};

// document.getElementsByClassName(".dropbtn").onclick = function() {toggleVisibility('artic3')};

// store in a variable what I want to manipulate
const nombre = document.querySelector(".dropdown-content");
console.log(nombre);
const btn = document.querySelector(".dropbtn").onclick;
console.log(btn);
btn.addEventListener("click", toggleVisibility);
// console.log(nombre);


/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function toggleVisibility(param1) {
//   console.log("Inside myFunction");
//   document.getElementById(param1).classList.toggle("show");
// }

function toggleVisibility(param1) {
  console.log("Inside myFunction");
  // nombre.classList.toggle("show");}
  param1.classList.toggle("show");}

// function showMore() {
//   if (article.className == "open") {
//     // read less
//     article.className = "";
//     button.innerHTML = "Show more";
//   } else {
//     //read more
//     article.className = "open";
//     button.innerHTML = "Show less";
//   }
// }