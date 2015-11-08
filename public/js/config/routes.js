var app  = angular.module('app');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'mainController',
      templateUrl: 'views/index.html'
    });
}]);