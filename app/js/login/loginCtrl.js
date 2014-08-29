angular.module('login.controllers')
  .controller('loginCtrl', function ($scope, userService) {

      $scope.user = {
          userName: userService.userName,
          password: userService.password
      };

      $scope.login = function () {

      };

  });