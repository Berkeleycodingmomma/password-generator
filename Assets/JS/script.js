var characterLength = 8;
var choiceArray = [];
//Added the special character's needed
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', ':', '.', '?', '/'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


var generateBtn = document.querySelector("#generate");

//I added "Event listener" to generate the button
generateBtn.addEventListener("click", typePassword);

//prompts will be either true or false
function typePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  console.log("I clicked the button") // Tested clicking the button
  var password = "";

  for (var x = 0; x < characterLength; x++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex]
  }
  console.log("password", password)
  return password;
}

// Added a "parseInt"to convert the values into integers
// Testing to see if this is ALL false
function getPrompts() {
  choiceArray = [];

  // NaN below
  characterLength = parseInt(prompt("How many characters would you like in your paasssword? 8 - 128 characters please."));


  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Your character length needs to be a number, 8 - 128 digets. Please try again.");
    return false;
  }
  // User has four promt questions to help create a new password 
  if (confirm("Do you want to use special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
    console.log("choiceArray", choiceArray)
  }
  if (confirm("Do you want to use lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
    console.log("choiceArray", choiceArray)

  }
  if (confirm("Do you want to use upper case letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
    console.log("choiceArray", choiceArray)

  }
  if (confirm("Do you want to use numbers in your password?")) {
   
    console.log("choiceArray", choiceArray)
  }
 
  // return true;
  return choiceArray //Tested the "Return" generated password
}







// // -criteria characters needed
// // -make sure the users input is valid
// // -generate password
// // -display password to the page


// resourcces

// https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box

//https://www.w3docs.com/learn-javascript/javascript-simple-actions.html

//https://www.geeksforgeeks.org/nan-not-number-java/

//https://www.w3schools.com/jsref/jsref_obj_array.asp