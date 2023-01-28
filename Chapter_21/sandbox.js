// object literals
const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];
console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: '1234@gmail.com',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login: function() {
        console.log('the user logged in');
    }, 
    logout() {
        // you can also use this to imply regular function
        console.log('the user logged out');
    },
    logBlogs: function() {
        // if you use the arrow function this will mean the window object
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

// use . notation
console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

// use [] notation
console.log(user['email']);

user['name'] = 'chun-li';
console.log(user['name']);

const key = 'location';
console.log(user[key]);


// add methods to object
user.login();
user.logout();

// const name = 'mario';
// name.toUpperCase();

console.log(this);

user.logBlogs();