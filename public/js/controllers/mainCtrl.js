var app = angular.module('app');

app.controller('mainController', ['$scope', 'trendsService', '$http', '$q', function ($scope, trendsService, $http, $q) {
  $scope.twitterTrends = "";
  trendsService.getTwitter('1')
    .success(function (data) {
      var trends = $.parseJSON(data);
      $scope.twitterTrends = trends.trends;
    }
  );
}]);