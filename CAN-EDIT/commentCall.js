
const fs = require('fs');
const path = require('path');

module.exports = (req, resp)=>{
  fs.readFile(path.join(__dirname, '../INIT-VARIABLES/flag.txt'), 'utf-8',(err, data)=>{
    resp.render('index', {comment: `${data}`});
  });
};
