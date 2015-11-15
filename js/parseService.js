angular.module('todo').service('parseService', function ($q, $http, parse) {
  console.log('parse service loaded');

  this.getTodos = function () {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: parse.url

    }).then(function (res) {
      console.log(res);
      dfd.resolve(res.data.results);
    })

    return dfd.promise;

  }

  this.postTodo = function (todo) {
    return $http({
      method: 'POST',
      url: parse.url,
      data: todo

    })

  }
})