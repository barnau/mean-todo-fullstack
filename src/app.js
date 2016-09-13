var express = require('express');
var router = require('./api')
var parser = require('body-parser');


var app = express();

require('./database');
require('./seed.js');



app.use(parser.json());
app.use('/api', router);

app.use('/', express.static('public'))

app.listen(3000, function() {
	console.log('App is running on port 3000.');
})


