var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8888, function(){
    console.log("Express server has started on port 8888")
})

app.use('/static', express.static(__dirname + '/public'));