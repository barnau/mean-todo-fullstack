(function() {
    'use strict';

    angular
        .module('app')
        .factory('TodoFactory', TodoFactory);

    TodoFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function TodoFactory($http, apiUrl) {
        var service = {
            getTodo: getTodo,
            postTodo: postTodo,
            deleteTodo: deleteTodo,
            putTodo: putTodo
           
        };
        return service;

        ////////////////
        

        function getTodo() {
        	return $http.get(apiUrl);
        };
        function postTodo(listItem) {
            return $http.post(apiUrl, listItem);
        } 
        function deleteTodo(index) {
            return $http.delete(apiUrl + '/' + index);
        }
        function putTodo(id, listItem) {
            return $http.put(apiUrl + '/' + id, listItem)
        }


        /*function getMovieDetailData(title) {
           // return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json&type=movie');
        }*/
    }
})();