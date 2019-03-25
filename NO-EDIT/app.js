const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = require('../INIT-VARIABLES/port');
const password = require('../INIT-VARIABLES/password');


//component imports
const flagCall = require('../CAN-EDIT/flagCall');
const commentCall = require('../CAN-EDIT/commentCall');
const helloThere = require('../CAN-EDIT/helloThere');
const loginUser = require('../CAN-EDIT/loginUser');
const checkServer = require('../CAN-EDIT/checkServer');

// app.use(teamGetCalls);

// App Configs
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/VIEWS'));
app.use(express.static(path.join(__dirname, '../public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// can edit calls
app.get('/flag', flagCall);
app.get('/comment', commentCall);
app.get('/helloThere', helloThere);
app.get('/login', loginUser);
app.get('/checker.js', checkServer);

app.get('/', (req, resp)=>{
  resp.render('index');
});




app.post('/login', (req, resp)=>{
  console.log(req.body);
  if(req.body.username === 'admin' && req.body.password === password){
    fs.readFile(path.join(__dirname, '../INIT-VARIABLES/flag.txt'), 'utf8', (err, data)=>{
      resp.send(data);
    });
  }
  else{
    resp.send('Wrong');
  }
});


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
    // console.log(path.join(__dirname, '/checker.js'));

    // fs.readFile(path.join(__dirname, '/checker.js'), 'utf8', (err, data)=>{
    //   data = `${data}`;
    //   if(err) console.error(err);
    //   let newData = `function checker(password){
    //     if(!document){
    //       let document = {};
    //     }
    //     else{
    //       if(password === document.getElementById('username').value()){
    //         document.getElementById('submitter').setAttribute('class') = '';
    //       }
    //       else{
    //         document.getElementById('submitter').setAttriute('class') = 'noShow';
    //       }
    //     }
    //
    //   }
    //
    //   if(window.document){window.document.getElementById('password').setAttriute('onkeydown') = checker('password');}`;
    //   fs.writeFile(path.join(__dirname, '/checker.js'), newData, (err2)=>{
    //     if (err2) console.error(err2);
    //     console.log('Checker Set up');
    //   });
    // });
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
