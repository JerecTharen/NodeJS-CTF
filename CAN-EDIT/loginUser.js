
const checker = require('../NO-EDIT/checker');

module.exports = (req, resp)=>{
  resp.render('loginUser', {checker: checker});
};
