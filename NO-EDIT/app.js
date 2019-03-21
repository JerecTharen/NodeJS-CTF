const express = require('express');
const fs = require('fs');

const app = express();
const port = require('../INIT-VARIABLES/port');


//component imports
const teamGetCalls = require('../CAN-EDIT/get-calls');

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

app.get('/flag', teamGetCalls(req, resp));

module.exports = app;

// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
