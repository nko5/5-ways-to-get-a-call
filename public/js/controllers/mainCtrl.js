var app = angular.module('app');

app.controller('mainController', ['$scope', 'trendsService', function ($scope, trendsService) {
  $('button').on('click', function (){
    trendsService.getTwitter()
      .success(function (data) {
        var trends = $.parseJSON(data);
        $scope.twitterTrends = trends.trends;
      }
    );
  });
}]);