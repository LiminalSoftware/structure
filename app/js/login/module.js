angular.module('login', ['login.controllers', 'login.services'])

  .config(function ($stateProvider) {

      $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'login/views/login.tpl.html',
          controller: 'loginCtrl'
      });
  });