const express = require("express");

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', (req, res) => {
    const data = {age: 29, job: 'software developer', hobbies: ['code code code', 'swimming', 'painting']}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);