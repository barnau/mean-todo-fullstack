(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [ '$stateParams', 'TodoFactory', 'toastr'];

    /* @ngInject */
    function MainController($stateParams, TodoFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';
        vm.test = 'this is a test from MainController';
        vm.li = {};
        vm.toDosList = [];
        vm.addToDo = addToDo;
        vm.removeToDo = removeToDo;
        vm.editTodo = editTodo;

        syncLocalToServer();

        function syncLocalToServer() {
            TodoFactory.getTodo().then(
                function(ListItems) {
                    
                   vm.toDosList = ListItems.data.todos;
                    
                }
            );
        }

        function validateTodo() {
        
        if(vm.li.newPriority || vm.li.newDescription) {
                return true;
            } else {
                return false
            }
            
        }

        function addToDo() {
           
            
            if(validateTodo()) {

                var newLi = angular.copy(vm.li);
                var priorityNumber = 0;
                switch (newLi.newPriority) {
                    case "high-priority-text":
                        priorityNumber = 1;
                        break;
                    case "medium-priority-text":
                        priorityNumber = 2;
                        break;
                    case "low-priority-text":
                        priorityNumber = 3;
                        break;
                    default:
                        priorityNumber = 1;

                }

                var todo = {
                    'description': newLi.newDescription,
                    'priorityClass': newLi.newPriority,
                    'priorityNumber': priorityNumber
                };

                TodoFactory.postTodo(todo).then(
                    function() {
                        syncLocalToServer();
                    }
                );

            } else {
                toastr.error('Please make sure to fill out description and priority.', 'Error');
            }

            vm.li.newDescription = "";
            vm.li.newPriority = 0;

        }

        function removeToDo(listItem) {

            console.log(listItem.listItemID);
            TodoFactory.deleteTodo(listItem._id).then(
                function() {
                    syncLocalToServer();
                }
            );
        }

        function editTodo(listItem) {
            console.log(listItem);
            TodoFactory.putTodo(listItem._id, listItem).then(
                
                function() {

                    syncLocalToServer();
                }
            );
        }
        activate();

        ////////////////

        function activate() {
        }
    }
})();