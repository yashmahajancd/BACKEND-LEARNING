const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log("middleware chala");
    next();
});
app.use(function(req, res, next) {
    console.log("firse challla...");
    next();
})

// app.use(express.json());
// app.use(express.urlencoded( {extended: true} ));

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/profile', function(req, res) {
    res.send("Profile Page");
})

app.get('/contact', function(req, res) {
    res.send("Contact Page");
})
app.get('/contact/emp', function(req, res) {
    res.send("Contact Employee Page");
})

app.get('/project', function(req, res) {
    res.send("Project Page");
})
app.get('/profile/name', function(req, res) {
    res.send("Yash Suresh Mahajan");
})

app.listen(3000);