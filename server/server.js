var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('./'));

app.listen(process.env.PORT || port, function(err){
    console.log('desinto mobile app server listening at port 5000');
});