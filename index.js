// question 1
var age = prompt('whats your age')
if (age >= 18){
    alert('you are adult')
}
else{
    alert('you are minor')
}


// question 2
var username = prompt('whats your name?')
if (username === 'john'){
    alert('Hello, John!');
}
else{
    alert('Hello, Stranger!');
}


// question 3
var length = prompt('whats length area of cylinder')
var width = prompt('whats width area of cylinder')
var area = length * width
alert(
    area
)
    
// question 4 missing



// question 5
var userAge = prompt('Enter your age');
if (userAge >= 13 && userAge <= 19) {
    alert('You are a teenager');
} else {
    alert('You are not a teenager');
}



// question 6
var radius = prompt('enter the value of radius for volume of cylinder')
var height = prompt('enter the value of height for volume of cylinder')
var pi = 3.14
var volume = pi * radius / 2 * height;
alert (
    "The volume of the cylinder is: " + volume
)


// question 7
var checkNum = prompt('enter a number and check its value')
if( checkNum > 0){
    alert('the number is positive')
}
else if (checkNum < 0){
    alert('the number is negative')
}
else{
    alert('the number is zero')
}


// question 8

var grade = prompt('Write your grade and check if you passed or failed!');

if (grade === 'A' || grade === 'B' || grade === 'C' || grade === 'D') {
    alert('Congratulations, you passed with grade ' + grade);
} else if (grade === 'F') {
    alert('Sorry, you failed with grade F');
} else {
    alert('Invalid input');
}


// question 9

// var checkMinOrMax = prompt('write any some digit and check its check its min or max')
// if(checkMinOrMax >= 100){
//     alert('')
// }

// not complete




// question 10







// question 11

var num =  prompt("Enter a number: ")

if (num % 2 == 0)
    {alert(num + " :is an even number.")}
else
    {alert(num + " :is an odd number.")}

// question 12

var originalPrice = prompt('write original price')
var discount = prompt('Enter a discount you want')
var discountPrice = discount / 100 * originalPrice
var finalPrice = originalPrice - discountPrice
alert(
    "your discount price is: "+ finalPrice
)



// qustion 13

var usersAge = prompt('Enter your Age')
if(usersAge < 13){
    alert('you are a child')
}
else if(usersAge >= 13 && usersAge <= 19){
        alert('You are a teenager');
    }
else{
    alert('you are adult')
}


// question 14

var checkUserName = prompt('Enter your name');

if (checkUserName.charAt(0).toLowerCase() === 'a') {
    alert('Your name starts with the letter "A".');
} else {
    alert('Your name does not start with the letter "A".');
}


// question 15
