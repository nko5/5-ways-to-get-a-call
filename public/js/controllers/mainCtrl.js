var app = angular.module('app');

app.controller('mainController', ['$scope', 'trendsService', function ($scope, trendsService) {
  $('button').on('click', function (){
    trendsService.getTwitter()
      .success(function (data) {
        $scope.twitterTrends = $.parseJSON(data);
        console.log($scope.twitterTrends);
      }
    );
  });
}]);