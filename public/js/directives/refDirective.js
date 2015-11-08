var app = angular.module('app');

app.directive('trendLink', function(){
  // Runs during compile
  return {
    link: function($scope, element, attrs) {
      var attr = $.parseJSON(attrs.trend);
      var link = encodeURIComponent(attr.name);
      $(element).append('<a href="/api#/video?trend='+ link +'">'+ attr.name +'</a>');
    }
  };
});
