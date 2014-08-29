angular.module('dashboard', ['dashboard.controllers', 'dashboard.services', 'dashboard.directives'])
  .config(function ($stateProvider) {

      $stateProvider.state('dashboard', {
          url: '/dashboard',
          templateUrl: '',
          controller: 'dashboardCtrl'
      });
  });

angular.module('dashboard.directives').directive('appVersion', function (version) {
    return function (scope, elm) {
        elm.text(version);
    };
});

