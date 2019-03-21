
// const express = require('express');
const fs = require('fs');
// const app = express();

// app.get('/flag', (req, resp)=>{
//    resp.send(fs.readFile('../INIT-VARIABLES/flag.txt', 'utf8'));
// });

module.exports = function(req, resp){
    console.log('got flag');
    resp.send(fs.readFile('../INIT-VARIABLES/flag.txt', 'utf8'));
};
