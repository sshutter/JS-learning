// const para = document.querySelector('p'); // grab the first p tag
// const para1 = document.querySelector('.error'); // grab the class
// const para2 = document.querySelector('div.error'); // grab the class with div

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras);
// console.log(errors);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);