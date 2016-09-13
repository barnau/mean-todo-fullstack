'use strict';

var Todo = require("./models/todo.js");

var todos = [
'Feed the dog',
'Walk the kids',
'Water the trees'
];

todos.forEach(function(todo) {
	Todo.find({'description': todo}, function(err, todos) {
		if(!err && !todos.length) {
			Todo.create({description: todo, priorityClass: "medium-priority-text", priorityNumber: 2})
		};
	});
});