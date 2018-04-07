
const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/cards',(req, res) => {
    // res.render('card', {prompt: "who is pug?", hint: "Dota 2, Valve"});
    // res.locals.prompt = "Who is IceFrog?"
    // res.render('card');
    res.render('card', {prompt: "who is pug?", colors, hint:"icefrog"});
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});
