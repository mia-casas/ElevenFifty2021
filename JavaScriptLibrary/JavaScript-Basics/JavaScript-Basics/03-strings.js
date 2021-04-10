console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var tweet = "Hello world";
console.log(tweet);

var birthCity = "Munster";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState);  //concatenation

let gradYear = 2016;
let highSchool = "Andrean High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".");

let ageInAugust = 40; 
let hisSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(hisSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);
// coercion

// string methods 
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11));