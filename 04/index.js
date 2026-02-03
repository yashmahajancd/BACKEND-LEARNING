/////////////// Setting up Parsers for form ///////////////

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", function(req, res) {
//     res.send("Chal Raha hai...");
// })
// app.get("/profile", function(req, res) {
//     res.send("PROFILE bhi Chal Raha hai...");
// })

// app.listen(3000, function() {
//     console.log("It's Running...");
// })

//////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Setting up ejs for ejs pages ///////////////

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.set('view engine', 'ejs')

// app.get("/", function(req, res) {
//     res.render("hello");
// });

// app.listen(3000, function() {
//     console.log("It's Running...");
// });

//////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Testing Public Static Files ///////////////

// console.log(__dirname);     // D:\0 BACKEND 0\04
// console.log(__dirname+'/public');     // D:\0 BACKEND 0\04/public

// const path = require('path');
// console.log(path.join(__dirname, 'public'));     // D:\0 BACKEND 0\04\public

//////////////////////////////////////////////////////////////////////////////////////////////
/////////////// Setting up Public Static Files ///////////////

// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');

// app.get("/", function(req, res) {
//     res.render("hello");
// });

// app.listen(3000, function() {
//     console.log("It's Running...");
// })

//////////////////////////////////////////////////////////////////////////////////////////////
/////////////// DYNAMIC ROUTING ///////////////

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("hello");
});

app.get("/profile", function(req, res) {
    res.send("Profile Page");
});

app.get("/profile/:username", function(req, res) {
    res.send(`Welcome, ${req.params.username}`);
});

// app.get("/profile/:username", function(req, res) {
//     const username = req.params.username;
//     const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
//     res.send(`Welcome, ${capitalizedUsername}`);
// });

app.get("/profile/:username/:age", function(req, res) {
    const username = req.params.username;
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
    // res.send(req.params);     // return object
    res.send(`The Name is ${capitalizedUsername} and Age is ${req.params.age}.`);
})

app.listen(3000, function() {
    console.log("It's Running...");
});