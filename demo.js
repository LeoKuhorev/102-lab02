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

var likeCats = prompt('Nice to meet you, ' + userName + '! Do you like cats?');

if (likeCats === 'Yes' || likeCats === 'yes' || likeCats === 'YES') {
    document.write('<h2> This is cool, '+ userName + ', cats are cool!</h2>') 
} else if (likeCats === 'No' || likeCats === 'no' || likeCats === 'NO') {
    document.write('<h2> Oh, no, '+ userName + ', this page is full of cats</h2>')
} else {
    document.write('<h2> I am sorry, '+ userName + ', I did not quite understand your answer</h2>')
}
