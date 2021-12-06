/*
let js = "kaushik";
if (js = "kaushik") alert("kaushik chaudhary is king of the world");
console.log(32 * 2 - 33);
console.log("Naresh");
console.log(09);

let firstName = "Mahesh";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// concatenation
let firstName = "esh";
console.log("mah" + firstName);
console.log("nar" + " " + firstName);
console.log("sur" + firstName); 


let _number = 3;
console.log(_number);

// Variable name conventions
let kaushik_chaudhary = 'bca';
let $function = 99;

let person = "Suresh";
let PI = 3.1415;

let myFirstJob = "programmer";
let mySecondJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof person);
console.log(typeof PI);
console.log(typeof "akshat");
console.log(typeof 32);
console.log(typeof $);

javascriptIsFun = "manoj";
console.log(typeof javascriptIsFun);
 
let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

// bug of typeof,  it's not an object 
// console.log(typeof null);
*/

/*
// let,const and var
let age = 30;
age = 31;

    //eventually

const birthyear = 1991;
// birthyear = 1990;
// const job;

var job = "programmer";
job = "teacher";
*/
/*
//Basic operaters
// Math operaters
const now = 2021;
const ageHaresh = now - 1989;
const ageJanmejay = now - 2015;
console.log(ageHaresh, ageJanmejay);

console.log(ageHaresh * 2, ageHaresh / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// concatenation
const firstName = 'Manish';
const lastName = "Chaudhary";
console.log(firstName + " " + lastName);

// Assignment operaters
let x = 10 + 5; //15
x += 10; // x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operaters
console.log(ageHaresh > ageJanmejay); // >, < , >= , <=
console.log(ageJanmejay >= 6);

const isFullAge = ageJanmejay >= 18;
*/
/*
//Operater Precedence
// JavaScript has a well-defined order of operator precedence.
const now = 2021;
const ageHaresh = now - 1989;
const ageJanmejay = now - 2015;
console.log(now - 1989 > now - 2015);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
// mdn operater precedence

const averageAge = (ageHaresh + ageJanmejay) / 2;
console.log(ageHaresh, ageJanmejay, averageAge);
*/
/*
//Strings and Template Literals
const firstName = "Kaushik";
const job = 'teacher';
const birthyear = 2000;m    
const year = 2021;

const kaushik = "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job + "!";
console.log(kaushik);

const newKaushik = `I'm ${firstName}, a ${year-birthyear} year old ${job}!`;
console.log(newKaushik)
console.log(`Just a regular string...`);
console.log('String with \n\
multipale\n\
lines');

console.log(`String with
multipale
lines`);
*/
/*
const age = 16;
// const isEnoughAge = age >= 18;
if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//type conversion 
const inputYear = '1991';
console.log(inputYear, Number(inputYear));
console.log(inputYear + 20);
console.log(Number(inputYear) + 20);

console.log(Number("kausik"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log(`I am years old`);
console.log("23" - "10" - 3);
console.log("23" - "10" - "3");
console.log("23" / "2");
console.log("23" > "11");

let n = "1" + 1; //"11"
n = n - 1; //10
console.log(n);
*/
/*
//5 falsy values: 0, "", undefined, null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(typeof {});
console.log(Boolean("kaushik"));

let money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('you shuld get a job!');
}

let height = 0;
if (height) {
    console.log('Yay! Heighet is defined');
} else {
    console.log("Height is UNDEFINED")
}
*/
/*
const age = "18";
if (age === 18) console.log('you just became an adult:D (strict)');
if (age === String(18)) console.log('you just became an adult:D (strict)');
if (age == 18) console.log('you just became an adult:D (loose)');

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is Not 23 or 7 or 9")
}

if (favourite !== 23) {
    console.log("")
}
*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (hasDriversLicense && hasGoodVision) {
//     console.log("Shara is able to drive!");
// } else {
//     console.log("Shara is not able to drive \n\ someone else should drive...");
// }
const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Shara is able to drive!");
} else {
    console.log("Shara is not able to drive \n\ someone else should drive...");
}
*/
/*
//The switch Statements
const day = "friday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

//convert in to if-else statement challange
if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day==="tuesday"){
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}
*/
/*
//statements and Experessions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

//The Conditonal (Ternary) Operator
const age = 17;
// age <= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
