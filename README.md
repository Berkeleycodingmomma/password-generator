# password-generator
Creating a secure password generator
# A Secure Password Generator (HTML, CSS, JavaScript)

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



  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Your character length needs to be a number, 8 - 128 digets. Please try again.");
    return false;
  }
  // User has four promt questions to help create a new password 
  if (confirm("Do you want to use special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
    console.log("choiceArray", choiceArray)
  }

(ABOVE)- I learned alot about creating arrays (which are a sequence of values). They are a visual representation of repeated addition or multiplication. I learned how to declare a variable with an array type and then create the array itself. 



//I added "Event listener" to generate the button
generateBtn.addEventListener("click", typePassword);


(ABOVE)- DOM Event Listners, after studing I learned that they "listen" for and action, then calls a function that performs a related task. In this example of code that is placed above, it is attaching an event handler to the specified element without overiding exsiting event handlers. 




 for (var x = 0; x < characterLength; x++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex]
  }
  console.log("password", password)
  return password;
}


(ABOVE)- I used this and found Math.floor(Math.random)() interesting. Math.floor is a method used to round off the number passed as a parameter to it's nearest integar in a Downward direction of rounding i.e. towards the lesser value. Then using Math.random, it will use a function to return a floating-point psuedo-random number between the range [0-1), 0 (inclusive), and 1 (exclusive). 



  if (confirm("Do you want to use upper case letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
    console.log("choiceArray", choiceArray)

  }

(ABOVE)- Concat. I spent some time researching this. I learned that it was a method that joins two or more arrays together. It will then return a new array containing the joined arrays BUT will never change the exsisting arrays. 




## Author Info

### Amanda Gray 

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link]
```





## Credits

Shout out to UC Berkeley Instructor Jerome Chenette) and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



