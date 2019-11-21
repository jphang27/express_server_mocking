//Import is for browser, more specifically import and export are more related to Babel.
//First thing to do in order to use express is to require('express');
const app = require('express')();
const businessRouter = require('./routes/api/Business.route');
const PORT = 3000;

//You can have as many middleware as you want
//you can chain them, that's why they're useful
//next means next middleware
//middleware is like a listener
//A listener is basically req, res, and next those objects
const exampleMiddleware = (req, res, next) => {
    req.user = 'John';
    next();
};

const exampleAuth = (req, res, next) => {
    if(req.auth === 'John') 
    console.log('Yay');

    next();
}

app.use(exampleMiddleware);
app.use(exampleAuth);

//Requests
// app.get('/', (req, res) => {
//     res.send('Hello');
// });

//apiRouter is a middleware
//apiRouter got replaced by businessRouter
//businessRouter is written in another js file and imported in this file.
app.use('/api', businessRouter);

app.listen(PORT, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`You are listening on port ${PORT}`);
})


