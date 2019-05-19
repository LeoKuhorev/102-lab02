/* eslint-disable quotes */
/* eslint-disable strict */
var today= new Date();
var hourNow = today.getHours();
var greeting;
console.log(hourNow);

if (hourNow > 18) {
    greeting = 'Good evening';
    }   else if (hourNow > 12) {
            greeting = 'Good afternoon';
    }   else if (hourNow > 0) {
            greeting= ' Good morning';
    }   else {
            greeting = 'Welcome'}

var userName = prompt(greeting + ", what's your name?");
//console.log(userName);

if (userName === 'Leo' || userName === 'LEO' || userName === 'leo') {
    document.write('<h1>' + userName + ', you are so cool!</h1>');
} else {
    document.write('<h1>' + userName + ', you are such a loser!</h1>');
}