const express = require('express');
const path = require("path");
const http = require("http");

const app = express()
 
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(express.static(__dirname + '/dist/tt2019'));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/tt2019/index.html'));
  });


  const server = http.createServer(app)
 
  server.listen(process.env.PORT || 3000);
