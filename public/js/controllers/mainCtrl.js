var app = angular.module('app');

app.controller('mainController', [function () {
  $('button').on('click', function (){
    console.log('ooh you touch my button');
  })
}]);