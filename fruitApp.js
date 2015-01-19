var fruitApp = angular.module('fruitApp', []);

fruitApp.service('fruitService', function () {
  this.fruits = [
    {"name": "Apples", "isDelicious": true},
    {"name": "Oranges", "isDelicious": true},
    {"name": "Prunes", "isDelicious": false}
  ];
});

fruitApp.controller('fruitController', [ '$scope', 'fruitService',
  function ($scope, fruitService) {
    $scope.fruits = fruitService.fruits;

    $scope.fruitAlert = function (fruit) {
      window.alert(fruit.name);
    }

    $scope.showAlt = false;

    $scope.toggleAlt = function () {
      $scope.showAlt = !$scope.showAlt;
    };
  }]);
