'use strict';

var angular1App = angular.module('angular1App', []);


function MainCtrl($scope) {
  $scope.hello = "World";

  $scope.todos = [];

  $scope.addTodo = function() {
    var title = $scope.todoTitle;
    $scope.todos.push({title:title});
    $scope.todoTitle = "";
  }
}
