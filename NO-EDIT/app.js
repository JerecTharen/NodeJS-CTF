const express = require('express');

const app = express();
const port = require('../INIT-VARIABLES/port');

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
