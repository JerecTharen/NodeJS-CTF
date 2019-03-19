const express = require('express');
const fs = require('fs');

const app = express();
const port = require('../INIT-VARIABLES/port');

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});

module.exports = app;
