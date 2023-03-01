'use strict';

console.log("hh");
var userName;
var userGender;
var userAge;
var theAnsswer;
userName = prompt("enter your name");
userGender = prompt("enter your gender ");



while (userGender !== 'male' && userGender != "female") {
    console.log('testing')

    alert("The answer should be either (male or female)");
    userGender = prompt("enter your gender ");
};


userAge = prompt("enter your age");
while (userAge <= 0) {
    alert("your userAge is wrong inter it again");
    userAge = prompt("enter your age");
}

theAnsswer = confirm("Do you wants to skip the welcoming message?");
console.log(theAnsswer);
if (theAnsswer == false) {
    if (userGender == 'male') {
        alert('welcom Mr ' + userName);
    }
    else {
        alert('welcom Ms ' + userName);
    };
};