var app = angular.module('app');

app.controller('mainController', ['$scope', 'trendsService', function ($scope, trendsService) {
  $scope.twitterTrends = "";
  trendsService.getTwitter()
    .success(function (data) {
      var trends = $.parseJSON(data);
      $scope.twitterTrends = trends.trends;
    }
  );
}]);