// console.log(1);
// alert('hello, world');

let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 50; unprohibited
console.log(points);

var score = 75;
console.log(score);

// strings
console.log('hello, world');

let email = 'mario@thenetninja.com';
console.log(email);

// strings concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]); 

// string length
console.log(fullName.length);

// strings methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(fullName);

let index = email.indexOf('@');
console.log(index);

// let email = 'mario@thenetninja.com';
let result2 = email.lastIndexOf('n');
console.log(result2);

// string slicing
let result3 = email.slice(0, 10);
console.log(result3);

let result4 = email.substring(4, 10);
console.log(result4);

// string modification
let result5 = email.replace('m', 'w');
console.log(result5);

let result6 = email.replace('n', 'w');
console.log(result6);

// number
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// maths operators +, -, *, /, **, %

// (/)
console.log(10/2);

// (%)
let result7 = radius%3;
console.log(result7);

let area = pi * radius ** 2
console.log(area);

// order of operation = B I D M A S
let order = 5 * (10-3)**2;
console.log(order);

let likes = 10;
// likes = likes + 1;

// short hand notation

// likes++;
// likes--;
// likes += 10;
// likes -= 10;
// likes *= 2;
// likes /= 2;

// NaN not a number

console.log(5 / 'hello');
console.log(5 * 'hello');

let result8 = 'the blog has ' + likes + ' likes';
console.log(result8);
