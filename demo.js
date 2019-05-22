'use strict';

// getting current system time
var today = new Date();
var hourNow = today.getHours();
var greeting;
var names = [0];
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

var drawKitten = function() {
  document.write ('<img src="https://placekitten.com/100/100"></img>');
};
//prompt questions
var userName = prompt(greeting + ', what\'s your name?');
//console.log(userName);
var yesNo = prompt('Nice to meet you, ' + userName + '! Do you want to see a cat picture?');

// if user answer "yes" - ask how many, if "no" - bring to the page
if (yesNo === 'Yes' || yesNo === 'yes' || yesNo === 'YES') {
  var howMany = prompt('Awesome, ' + userName + ', how many cats do you want?');
  var howManyInteger = parseInt (howMany);
  //    console.log(howManyInteger);
  // ask if user wants to give names
  var namesYesNo = prompt('Do you want to give names to all your ' + howManyInteger + ' cat(s)?');
  if (namesYesNo === 'Yes' || namesYesNo === 'yes' || namesYesNo === 'YES') { 
    document.write ('<h4> Here are your ' + howManyInteger + ' kitten(s), ' + userName + '</h4>');
    for (var i = 1; i < howManyInteger + 1; i++) {
      names.push(prompt('What\'s the name of your ' + i + ' cat?'));
      document.write ('<p id="number">cat number ' + i + '</p>');
      drawKitten();
      document.write ('<p>' + names[i] + '</p>');
    //  console.log(names[i]);
    }
  } else if  (namesYesNo === 'No' || namesYesNo === 'no' || namesYesNo === 'NO') {
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
} else if (yesNo === 'No' || yesNo === 'no' || yesNo === 'NO') {
  document.write ('<h4>Oh, this is sad, ' + userName + ', but there are some kittens below anyways :-) </h4>');        
} else {
  document.write ('<h4>I\'m sorry, ' + userName + ', I didn\'t quite get your answer. Please refresh the page and try one more time using only "yes" and "no" answers</h4>');
}