'use strict';

console.log("hh");
let userName;
let userGender;
let userAge;
let theAnsswer;
let likeSport;
let hungry;
let busy;
let yourInformation=[];
userName ="invalid"

userName ="enter your name: "+ prompt("enter your name");
yourInformation.push(userName);

userGender ="enter your gender: "+ prompt("enter your gender ");


while (userGender !== "enter your gender: "+'male' && userGender !="enter your gender: "+"female") {
    
    alert("The answer should be either (male or female)");
    userGender ="enter your gender: "+ prompt("enter your gender");
};
yourInformation.push(userGender);


userAge = "enter your age: "+ prompt("enter your age");
while (userAge <= 0) {
    alert("your userAge is wrong inter it again");
    userAge = prompt("enter your age");
}
yourInformation.push(userAge);

likeSport = 'do you like sport ? '+ confirm('do you like sport ?');

console.log( likeSport);
yourInformation.push(likeSport);
 
hungry = 'are you hungry ? ' + confirm('are you hungry ?');
yourInformation.push(hungry);
console.log(hungry);

busy = 'are you busy ? ' +confirm( 'are you busy ?');
console.log( busy) 
yourInformation.push(busy);


theAnsswer ="Do you wants to skip the welcoming message? "+ confirm("Do you wants to skip the welcoming message?");
console.log( theAnsswer);
if (theAnsswer == "Do you wants to skip the welcoming message? "+false) {
    if (userGender == "enter your gender: "+'male') {
        alert('welcom Mr ' + userName);
    }
    else {
        alert('welcom Ms ' + userName);
    };
};
yourInformation.push(theAnsswer);
console.log(yourInformation);
console.log(yourInformation.length);
for(let i =0 ; i<yourInformation.length;i++){
    console.log(yourInformation[i]) ;
}