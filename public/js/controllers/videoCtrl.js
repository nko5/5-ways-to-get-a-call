var app = angular.module('app');

app.controller('videoController', ['$scope', function($scope){

  function getVideoData(trend) {
    $.get('/api/youtube/search')
      .done(function(data) {
        $scope.data = $.parseJSON(data.items[0]);
        setVideo();
      });
  }

  function setVideo() {
    //maybe directive? or just pure jquery create iframe
    
  }
  getVideoData();
}]);