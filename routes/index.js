const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    req.message = 'Bye';
    next();
});

router.use((req,res,next) => {
    console.log(req.message);
    next();
});

router.get('/',(req, res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
    
});

router.get('/cards',(req, res) => {
    // res.render('card', {prompt: "who is pug?", hint: "Dota 2, Valve"});
    // res.locals.prompt = "Who is IceFrog?"
    // res.render('card');
    res.render('card', {prompt: "who is pug?", colors, hint:"icefrog"});
});

router.get('/hello', (req,res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect('/');
    }else {
        res.render('hello');
    }
});

router.post('/goodbye', (req,res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

router.post('/hello', (req,res) =>{
    // console.dir(req.body);
    // res.cookie('username', req.body.username);
    res.cookie('username',req.body.username);
    // res.render('hello', {name:req.body.username});
    res.redirect('/');
    // res.json(req.body);
});

router.use((req,res,next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});
//error handler
router.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

module.exports = router;