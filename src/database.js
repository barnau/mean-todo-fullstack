'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vstda', function(err) {
	if(err) {
		console.log('failed connecting to Mongo.');
	} else {
		console.log('Successfully connected to mongodb');
	}
})