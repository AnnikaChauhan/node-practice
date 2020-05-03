const express = require("express");
const app = express();

app.set('view engine', 'ejs');

//this is the middleware
app.use('/assets', express.static('assets'));

//anything between the function start and the res is middleware
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/profile/:name', (req, res) => {
    const data = {age: 29, job: 'software developer', hobbies: ['code code code', 'swimming', 'painting']}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);