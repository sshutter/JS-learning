// function declaration
// on the top of the file
function greet() {
    console.log('hello there');
}

//function expression
// anywhere in the file
const speak = function(name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};

greet();
speak('mario', 'moring');
speak('shaun');
speak();

const calArea = function(radius) {
    let area = 3.14 * radius**2;
    return area;
};

// const calArea = function(radius) {
//     return 3.14 * radius**2;
// };

const area1 = calArea(5);
console.log(area1);
