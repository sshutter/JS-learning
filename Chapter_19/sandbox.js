// callbacks & foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person) {
//     console.log(person);
// });

//define inside forEach
people.forEach((person, index) => {
    console.log(index, person);
});

// define outside forEach
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);