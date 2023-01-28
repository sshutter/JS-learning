// if statements

const age = 25;
if(age>20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3) {
    console.log("That's a lot of ninjas");
}

const password = 'pass';

if(password.length >= 12) {
    console.log('That password is might strong');
} else if(password.length >=8) {
    console.log('That password is long enough!');
} else {
    console.log('You need at least 8 character for password.');
}