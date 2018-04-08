
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//error handler
// app.use((req,res,next) => {
//     const err = new Error('Oh no');
//     err.status = 500;
//     next(err);
// });


app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});

// if name
// h2 Hello #{name}
// else