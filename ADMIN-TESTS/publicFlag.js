const http = require('http');

// const options = {
//   hostname: 'http://localhost',
//   port: 3050,
//   path: '/helloThere',
//   method: 'GET'
// };
// const flagOption = options;
// flagOption.path = '/flag.txt'
//
// const helloThere = http.request(options, (resp)=>{
//   console.log('sent helloThere');
//   resp.on('end', ()=>{
//     console.log('first get ended');
//   })
// });
//
// const flag = http.request(flagOption, (resp)=>{
//   console.log('send for flag');
//   resp.setEncoding('utf8');
//   resp.on('data', (flag)=>{
//     console.log(flag);
//   });
// });
//
//
// helloThere.on('error', (err)=>{
//   console.error(err);
// });
//
// flag.on('error', (err)=>{
//   console.error(err);
// });
//
// helloThere.write();
// helloThere.end();
// flag.write();
// flag.end();

http.get('http://localhost:3050/flag.txt', (resp)=>{
  // if(err){console.error(err)}
  // console.log(body);
  console.log(resp.statusCode);
});
