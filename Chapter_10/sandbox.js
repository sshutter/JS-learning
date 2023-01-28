// while loops

let i = 0;
while(i < 5) {
    console.log('in loop: ', i);
    i++;
}

const names = ['shaun', 'mario', 'luigi'];
let j = 0;
while(j < names.length) {
    console.log(names[j]);
    j++;
}

// do while loops (do before checking)

let k = 5;
do {
    console.log('val of k is: ', k);
    k++;
} while(k < 5);