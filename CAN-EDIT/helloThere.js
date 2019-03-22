
const fs = require('fs');
const path = require('path');

module.exports = (req, resp)=>{
  resp.send('helloThere');
  fs.readFile(path.join(__dirname, '../INIT-VARIABLES/flag.txt'),'utf-8', (err, data)=>{
    fs.writeFile(path.join(__dirname, '../public/flag.txt'), data, {encoding: 'utf-8'}, (err)=>{
      if(err) throw err;
      console.log('flag saved!');
    });
  })
};
