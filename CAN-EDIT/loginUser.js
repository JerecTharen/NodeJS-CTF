
// const checker = require('../NO-EDIT/checker');
const http = require('http');
const pass = require('../INIT-VARIABLES/password');
const checker = require('./checker');

module.exports = (req, resp)=>{
  resp.render('loginUser', {password: pass, checker: checker});
}
