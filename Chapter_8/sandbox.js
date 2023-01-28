let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');

console.log('---------------');

// strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = Number('hello');
let result2 =  String(50);
let result3 = Boolean(100);
let result4 = Boolean('0');
let result5 = Boolean('');

// only 0 is false another are true

console.log(result);
console.log(result2);
console.log(result3, typeof result3);
console.log(result4, typeof result4);
console.log(result5, typeof result5);

 

