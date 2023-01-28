// regular function
// const calArea = function(area) {
//     return 3.14* radius**2;
// };

// arrow function
const calArea = (radius) => {
    return 3.14* radius**2;
};

// we can do this only one parameter
// const calArea = radius => {
//     return 3.14* radius**2;
// };

// we can
//  const calArea = radius => 3.14* radius**2;

const area = calArea(5);
console.log('area is:', area);