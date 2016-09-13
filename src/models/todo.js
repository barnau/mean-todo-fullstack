'use strict';

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	description: String,
	priorityClass: String,
	priorityNumber: Number
});
var model = mongoose.model('Todo', todoSchema);

module.exports = model;;