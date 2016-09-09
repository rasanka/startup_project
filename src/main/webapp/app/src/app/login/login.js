angular.module('ngBoilerplate.login', ['ui.router','ngResource'])
    .config(function($stateProvider) {
        $stateProvider.state('login', {
                url:'/login',
                views: {
                    'main': {
                        templateUrl:'login/login.tpl.html',
                        controller: 'LoginCtrl'
                    }
                },
                data : { pageTitle : "Login" }
            }
        );
    })
    .factory('sessionService', function($http, $base64) {
        var session = {};
        session.login = function(data) {
            return $http.post("/basic-web-app/login", "username=" + data.name +
                "&password=" + data.password, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            } ).then(function(data) {
                alert("login successful");
                localStorage.setItem("session", {});
            }, function(data) {
                alert("error logging in");
            });
        };
        session.logout = function() {
            alert('Logging out..');
            localStorage.removeItem("session");
        };
        session.isLoggedIn = function() {
            alert('Is logged in');
            return localStorage.getItem("session") !== null;
        };
        return session;
    })
    .controller("LoginCtrl", function($scope, sessionService, $state) {
        $scope.login = function() {
            sessionService.login($scope.user).then(function () {
                $state.go("home");
            });
        };
    });