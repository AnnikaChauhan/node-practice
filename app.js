const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

//this is the middleware
app.use('/assets', express.static('assets'));

//anything between the function start and the res is middleware
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    // console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    //nodemailer will let you send the post request on to a database
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res) => {
    const data = {age: 29, job: 'software developer', hobbies: ['code code code', 'swimming', 'painting']}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);