var characterLength = 8;
var choiceArray = [];
//Added the special charaacter's needed
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', ':', '.', '?', '/'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


var generateBtn = document.querySelector("#generate");

//I added "Event listener" to generate the button
generateBtn.addEventListener("click", writePassword);

//prompts will be either true or false
function typePassword() {
    var correctPrompts = getPrompts();

  if (correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordTest.value = password;

  }
}


  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword
  }

  function generatePassword() {
    console.log("I clicked the button") // Tested clicking the button
    var password = "";
    for (var x = 0; x < characterLength; x++) {

    }
  }
    // Need to prompt user for the password criteria
    var password = prompt("Your Secure Password");



    // Added a "parseInt"to convert the values into integers
    // Testing to see if this is ALL false
    function getPrompts() {
      choiceArray = [];

      // NaN below
      characterLength = parseInt(prompt("How many characters would you like in your paasssword? (8 - 128 characters"));


      if (isNaN(characterLength)) || characterLength < 8 || characterLength > 128 {
        alert("Your character length needs to be a Number, 8 - 128 digets. Please try again.");
        return false;
      }
      // User has four promt questions to help create a new password
      if (confirm("Do you want to use special characters in your password?")) {
        choiceArray = choiceArray.concat(specialChoiceArray);

      }
      if (confirm("Do you want to use lowercase letters in your password?")) {
        choiceArray = choiceArray.concat(lowerCaseArray);

      }
      if (confirm("Do you want to use upper case letters in your password?")) {
        choiceArray = choiceArray.concat(upperCaseChoiceArray);

      }
      if (confirm("Do you want to use numbers in your password?")) {
        choiceArray = choiceArray.concat(numbersChoiceArray);

      }
      return true;
    }



    // return "Generated Password"//Tested the "Return" generated password
    //  }

    // }


    // // -password length
    // // -criteria characters needed
    // // -make sure the users input is valid
    // // -generate password
    // // -display password to the page


    // resourcces

    // https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box

    //https://www.w3docs.com/learn-javascript/javascript-simple-actions.html

    //https://www.geeksforgeeks.org/nan-not-number-java/

    //https://www.w3schools.com/jsref/jsref_obj_array.asp




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