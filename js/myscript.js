// ? creo file index.html
// ? creo file myscript.js
// ? inserisco il riferimento allo script creato al termine del body


// ? dichiaro la variabile che ospiterà il prompt dell'utente (CONST)
    // dilemma let&const per la variabile => CONST => userName
const userName = prompt("Insert your name");

console.log("userName");

const userAge = prompt("Insert your userName");

console.log("userName");

const userColor = prompt("Insert your colorPrefer");

console.log("userColor");

document.getElementById("answer").innerHTML = "Your passowrd is: " + userName + userAge + userColor + 23; 



