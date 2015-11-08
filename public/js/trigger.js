angular.module('app')
  .service('trendsService', ['$http', function ($http) {
    this.getTwitter = function(){
      return $http.get('/api/twitter/trends', {
        params:
          {
            woeid: 1
          }
      });
    };
}]);