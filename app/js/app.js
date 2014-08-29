'use strict';

// Declare all modules first
angular.module('login.controllers', []);
angular.module('login.services', []);
angular.module('dashboard.controllers', []);
angular.module('dashboard.services', []);
angular.module('dashboard.directives', []);

angular.module('structure', [
    'ui.router',
    'login',
    'dashboard'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/error');

    $stateProvider.state('default', {
        url: '/',
        templateUrl: 'default.tpl.html',
        controller: ['$scope', function ($scope) {
            $scope.greeting = 'Hello';
        }]
    });
})
  .run(function ($rootScope) {
      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
          console.log('stateChangeError: ', event, error);
      });
  });

