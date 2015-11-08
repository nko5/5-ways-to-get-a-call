var app = angular.module('app');

app.directive('trendLink', function(){
  // Runs during compile
  return {
    link: function($scope, element, attrs) {
      var attr = $.parseJSON(attrs.trend);
      var link = encodeURIComponent(attr.name);
      var nam = attr.name;
      var regexp = new RegExp('#','g');
      var name = nam.replace(regexp, " ");
      $(element).append('<a class="btn btn-primary btn-lg" href="/api#/video?trend='+ link +'">'+ name +'</a>');
    }
  };
});
app.directive('pullDown', function (){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '../../views/splash.html',
    link: function($scope, element, attrs) {
    }
  };
})
