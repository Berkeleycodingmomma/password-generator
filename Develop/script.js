// Assignment code here


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("I clicked the button")// Tested clicking the button
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
