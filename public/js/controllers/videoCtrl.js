var app = angular.module('app');

app.controller('videoController', ['$scope', '$http', '$routeParams', 'trendsService', function($scope, $http, $routeParams, trendsService){
  var url = 'http://www.youtube.com/embed/';
  trendsService.getTwitter()
    .success(function (data) {
      var trends = $.parseJSON(data);
      $scope.twitterTrends = trends.trends;
    }
  );
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
    if(res.items.length === 0){
      return $('iframe').attr('src', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWkCn-8IoWbeMJsIpyImprQXvin05IEv_YF18o0FarCUbQnf31cBfEt9g');
    }else{
      setVideo(res);
    }
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