# password-generator
Creating a secure password generator
# Personal-Portfolio

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 

Creating Arrays: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays

Understanding DOM EventListeners: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

Math.floor(Math.random()): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
|    

Understanding concat: https://www.w3schools.com/jsref/jsref_concat_array.asp




## Description 
I created an application that a user can use to generate a strong random secure password based on the four promts they were given in selecting the criteria. It features HTML, CSS, and is powered by my JavaScript code. It adapts to multiple screen sizes. 

     

## Personal Portfolio Code Example of JavaScript


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

