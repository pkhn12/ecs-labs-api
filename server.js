var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api', function (req, res) {
   console.log(`request ${req.method} ${req.path}`);
   res.send({ name: 'Example API', version: 1.3, message: 'Hello Developer', status: 'deployment with aws pipeline' })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
