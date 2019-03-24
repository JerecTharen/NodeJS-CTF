
// const checker = require('../NO-EDIT/checker');
const http = require('http');

module.exports = (req, resp)=>{

  const data = JSON.stringify({
    password: 'w'
  });

  const optoins = {
    hostname: 'http://localhost',
    port: 3050,
    path: '/checker',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const passReq = http.request(options, (serverResp)=>{
    serverResp.on('data', (dataResp)=>{
      if(data === 'true'){
        resp.render('loginUser', {allow: true});
      }
      else{
        resp.render('loginUser', {allow: false});
      }
    });
  });

  passReq.on('error', (err)=>{
    console.error(err);
  });

  passReq.write(data);
  passReq.end();
};
