'use strict';

// getting current system time
var today = new Date();
var hourNow = today.getHours();
var greeting;
var cat = {
  name: 0,
  color: 0,
  age: 0,
};
var answer;
//console.log(hourNow);

//changing greeting depending on current time
if (hourNow > 18) {
  greeting = 'Good evening';
}   else if (hourNow > 12) {
  greeting = 'Good afternoon';
}   else if (hourNow > 0) {
  greeting = ' Good morning';
}   else {
  greeting = 'Welcome';
}

//allow only yes/no answer
var userInput = function (question) {
  answer = prompt (question);
  while (!(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no')) {
    answer = prompt ('I\'m sorry, ' + userName + ', I didn\'t quite get your answer. Please try again using only "yes" and "no" answers');
  }
  return answer.toLowerCase();
};

//draw picture
var drawKitten = function() {
  document.write ('<img src="https://placekitten.com/100/100"></img>');
};
//prompt questions
var userName = prompt(greeting + ', what\'s your name?');
//console.log(userName);
var yesNo = userInput('Nice to meet you, ' + userName + '! Do you want to see a cat picture?', 'Yes');

// if user answer "yes" - ask how many, if "no" - bring to the page
if (yesNo === 'yes') {
  var howMany = prompt('Awesome, ' + userName + ', how many cats do you want?');
  var howManyInteger = parseInt (howMany);
  while (Number.isInteger(howManyInteger) !== true) {
    howMany = prompt('Sorry, it should be a number, please try again');
    howManyInteger = parseInt (howMany);
  }
  //    console.log(howManyInteger);
  // ask if user wants to give names
  var namesYesNo = userInput('Do you want to provide more details about your ' + howManyInteger + ' cat(s)?', 'Yes');
  if (namesYesNo === 'yes') {
    document.write ('<h4> Here are your ' + howManyInteger + ' kitten(s), ' + userName + '</h4>');
    for (var i = 1; i < howManyInteger + 1; i++) {
      cat.name = (prompt('What\'s the name of your ' + i + ' cat?'));
      cat.age = (prompt('What\'s the age of your ' + i + ' cat?'));
      cat.color = (prompt('What\'s the color of your ' + i + ' cat?'));
      document.write ('<p id="number">cat number ' + i + '</p>');
      drawKitten();
      document.write ('<p>' + cat.name + ' ' + cat.age + ' ' + cat.color + '</p>');
    //  console.log(cat.name[i]);
    }
  } else if  (namesYesNo === 'no') {
    document.write ('<h4> Here are your ' + howManyInteger + ' kitten(s), ' + userName + '</h4>');
    for (i = 1; i < howManyInteger + 1; i++) {
      drawKitten();
    }
  } else {
    document.write ('<h4>I\'m sorry, ' + userName + ', I didn\'t quite get your answer for this question. Here are your ' + howManyInteger + ' kitten(s) anyways </h4>');
    for (i = 1; i < howManyInteger + 1; i++) {
      drawKitten();
    }
  }
} else if (yesNo === 'no') {
  document.write ('<h4>Oh, this is sad, ' + userName + ', but there are some kittens below anyways :-) </h4>');
}