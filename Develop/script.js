// Assignment code here


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("I clicked the button")// Tested clicking the button

//Need to prompt user for the password criteria
// -password length
// -criteria characters needed
// -make sure the users input is valid
// -generate password




// -display password to the page
return "Generated Password"//Tested the "Return" generated password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
