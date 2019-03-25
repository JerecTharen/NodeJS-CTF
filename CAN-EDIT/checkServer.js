
const checker = require('./checker');

module.exports = (req, resp)=>{
  resp.send(checker);
}
