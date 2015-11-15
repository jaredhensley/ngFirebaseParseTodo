angular.module('todo').controller('homeCtrl', function ($scope, todos, parseService) {
  $scope.test = 'test';
  $scope.getToDos = todos;
  $scope.postToDo = function () {

    parseService.postTodo({
        todo: $scope.newTodo
      })
      .then(function (res) {

        if (res.status === 201) {
          $scope.getTodos();
        }

      })

    $scope.newTodo = '';

  }

  $scope.getTodos = function () {



    parseService.getTodos().then(function (todos) {
      $scope.todos = todos;

    })


  }

})