console.log("Hello world");
let name = "Gurvinder";
let age = 28;
let fav_color = "White";
const dob = "17/02/1994";

console.log(
  `${name} is ${age} years old, he is born on ${dob} and his favourite color is ${fav_color}.`
);
let name1 = "ABC";
let age1 = 29;
let fav_color1 = "Red";
const dob1 = "17/02/1993";

if (age1 > age) {
  console.log(`${name1} is older than ${name}`);
}
age = age + 1;
console.log(
  `${name} is ${age} years old, he is born on ${dob} and his favourite color is ${fav_color}.`
);
let sum = age + age1;
console.log(`Sum of ${name} and ${name1}'s age is 30`);

let a = "20";
let b = 30;
console.log(a + b, b - a, b * a, parseInt(a) + b, parseInt(a) + b.toString());
