angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'ngBoilerplate.account'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
    
.controller( 'HomeCtrl', function HomeController( $scope, sessionService ) {
  $scope.isLoggedIn = sessionService.isLoggedIn;
  $scope.logout = sessionService.logout;
})

;

