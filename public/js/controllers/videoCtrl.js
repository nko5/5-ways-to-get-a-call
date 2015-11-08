var app = angular.module('app');

app.controller('videoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  var url = 'http://www.youtube.com/embed/';
  $scope.title = $routeParams.trend;
  function getVideoData(trend) {
    $http.get('/api/youtube/search', {
      params: {
        'order': 'relevance',
        'q': trend,
        'part': 'snippet',
        'type': 'video'
      }
    }).then(successCallback, errorCallback);
  }

  function successCallback(response){
    var res = $.parseJSON(response.data);
    setVideo(res);
  }
   function errorCallback (response){
    var res = $.parseJSON(response.data);
    console.log('response err', res);
  }

  function setVideo(video) {
    $('iframe').attr('src', url + video.items[0].id.videoId + '?autoplay=true');
  }
  getVideoData($scope.title);
}]);