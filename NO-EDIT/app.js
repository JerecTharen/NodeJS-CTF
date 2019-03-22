const express = require('express');
const fs = require('fs');

const app = express();
const port = require('../INIT-VARIABLES/port');


//component imports
const flagCall = require('../CAN-EDIT/flagCall');

// app.use(teamGetCalls);

app.get('/flag', flagCall);

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

// module.exports = app;

// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
