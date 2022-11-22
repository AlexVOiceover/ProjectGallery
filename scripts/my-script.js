console.log("Sending a message to the console");

//Use querySelector to read the String "Date:"
const fecha = document.body.querySelector("#p2");

//Create new HTML element
const para = document.createElement("p");

//Append the new element to Date()
para.innerHTML = (new Date()).toLocaleDateString('en-GB').toString();
document.getElementById("p2").appendChild(para);
