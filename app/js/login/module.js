angular.module('login', ['login.controllers', 'login.services'])

  .config(function ($stateProvider) {

      $stateProvider.state('login', {
          url: '/login',
          templateUrl: '../app/js/login/views/login.tpl.html',
          controller: 'loginCtrl'
      });
  });