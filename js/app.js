'use strict';

console.log("hh");
let userName;
let userGender;
let userAge;
let theAnsswer;
let likeSport;
let hungry;
let busy;
let yourInformation = [];
let question1;
let question2;
let question3;
let question4;
let question5;
let question6;
let question7;
let elemnt;
function upload(elemnt) {
    yourInformation.push(elemnt);
};

userName = prompt("enter your name");
upload(userName);
question1 = "enter your name :";
upload(question1);

userGender = prompt("enter your gender ");
while (userGender !== 'male' && userGender !== "female") {

    alert("The answer should be either (male or female)");
    userGender = prompt("enter your gender");
};
upload(userGender);
question2 = "enter your gender :";
upload(question2);


userAge = prompt("enter your age");
while (userAge <= 0) {
    alert("your userAge is wrong inter it again");
    userAge = prompt("enter your age");
}
upload(userAge);
question3 = "enter your age :";
upload(question3);



likeSport = prompt('do you like sport ?');
upload(likeSport);
question4 = 'do you like sport ?';
upload(question4);



hungry = prompt('are you hungry ?');
upload(hungry);
question5 = 'are you hungry ?';
upload(question5);


busy = prompt('are you busy ?');
upload(busy);
question6 = 'are you busy ?';
upload(question6);

theAnsswer = confirm("Do you wants to skip the welcoming message? ");
if (theAnsswer == false) {
    if (userGender == 'male') {
        alert('welcom Mr ' + userName);
    }
    else {
        alert('welcom Ms ' + userName);
    };
};
upload(theAnsswer);
question7 = "Do you wants to skip the welcoming message? ";
upload(question7);

console.log(yourInformation);

console.log(yourInformation.length);
for (let i = 0; i < yourInformation.length; i += 2) {
    if (yourInformation[i] == '') {
        console.log((yourInformation[i + 1]) + ' invalid');
    } else {
        console.log((yourInformation[i + 1]) + yourInformation[i]);
    }

};