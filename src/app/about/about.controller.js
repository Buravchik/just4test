'use strict';

angular.module('myNewProject')
  .controller('AboutCtrl', function ($scope) {
    $scope.newRandomValue = function() {
      $scope.timer = (50 * Math.random()).toPrecision(2);
    };
});
