
// const express = require('express');
const fs = require('fs');
const path = require('path');
// const dirname = path(__dirname);
// const app = express();

// app.get('/flag', (req, resp)=>{
//    resp.send(fs.readFile('../INIT-VARIABLES/flag.txt', 'utf8'));
// });

module.exports = (req, resp) => {
    console.log('got flag');
    // let send;
    // let read = fs.readFile(path.join(__dirname, '../INIT-VARIABLES/flag.txt'), 'utf-8', (err, data)=>{
    //   let send = data;
    //   console.log(data);
    //   resp.send(send);
    // });
    fs.readFile(path.join(__dirname, '../INIT-VARIABLES/flag.txt'), 'utf-8', (err, data)=>{
      let flag = data;
      resp.render('index', {flag: flag});
      console.log('rendering flag');
    });
};
