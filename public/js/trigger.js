angular.module('app')
  .service('trendsService', ['$http', function ($http) {
    this.getTwitter = function(woeid){
      return $http.get('/api/twitter/trends', {
        params:{
          woeid: woeid
        }
      });
    };
}]);