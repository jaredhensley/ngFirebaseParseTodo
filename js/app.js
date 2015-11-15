angular.module('todo', ['firebase', 'ui.router'])
  .constant('parse', {
    url: 'https://api.parse.com/1/classes/todos'
  })
  .constant('firebase', {
    url: 'https://todowithdoritochips.firebaseio.com/'
  })
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        resolve: {
          todos: function (parseService) {
            return parseService.getTodos();

          }

        }

      })
      .state('list', {
        url: '/list/:listType',
        templateUrl: 'templates/type.html',
        controller: 'typeCtrl',
      })
  })