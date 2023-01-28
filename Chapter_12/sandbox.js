// logical operators - OR || and AND &&

const password = 'password';

if(password.length >= 12 && password.includes('@')) {
    console.log('That password is might strong');
} else if(password.length >=8 || password.includes('@') && password.length > 5) {
    console.log('That password is strong enough!');
} else {
    console.log('You need at least 8 character for password.');
}

// logical NOT (!)
let user = false;

if(!user) {
    console.log('You must logged in to continue');
}