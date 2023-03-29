var characterLength = 8;
var choiceArray = [];
//Added the special charaacter's needed
var specialCharacterArray = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`,`:`,`.`,`?,`/`];
var lowerCaseArray = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
var upperCaseArray = [`A`,`B`,C``D,`E`,F``G,`H`,I``J,`K`,L``M,`N`,O``P,`Q`,R``S,`T`,U``V,`W`,X``Y,`Z`];
var numberArray = [`1`,`2,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`,];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function
function generatePassword() {
  console.log("I clicked the button")// Tested clicking the button


// //Need to prompt user for the password criteria
  var password = prompt("Your Secure Password");


// // -password length
// // -criteria characters needed
// // -make sure the users input is valid
// // -generate password
// // -display password to the page


return "Generated Password"//Tested the "Return" generated password
 }
function writePassword() { var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;

}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











  // var password = prompt("Enter in the password");
  //       if (password=="1234") {
  //           //location = "media.html"
          
//         }

// 
//         else 
//         {
//           document.getElementById("msg").value = "test";  
//           //location = "error.html"
//         }

//         function myFunction() {
//           var txt;
//           if (confirm("Press a button!")) {
//             txt = "You pressed OK!";
//           } else {
//             txt = "You pressed Cancel!";



// <h2>JavaScript Prompt</h2>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   let text;
//   let person = prompt("Please enter your name:", "Harry Potter");
//   if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
// </script>


// <button onclick="alert('Hello\nHow are you?')">Try it</button>













