angular.module('ngBoilerplate.account', ['ui.router', 'ngResource', 'base64'])
.config(function($stateProvider) {
    $stateProvider.state('login', {
        url:'/login',
        views: {
            'main': {
                templateUrl:'account/login.tpl.html',
                controller: 'LoginCtrl'
            }
        },
        data : { pageTitle : "Login" }
    })
    .state('register', {
            url:'/register',
            views: {
                'main': {
                    templateUrl:'account/register.tpl.html',
                    controller: 'RegisterCtrl'
                }
            },
            data : { pageTitle : "Registration" }
            }
    );
})
.factory('sessionService', function($http, $base64) {
    var session = {};
    session.login = function(data) {
        return $http.post("/TicketGuru/login", "username=" + data.email +
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
        localStorage.removeItem("session");
    };
    session.isLoggedIn = function() {
        return localStorage.getItem("session") !== null;
    };
    return session;
})
.factory('accountService', function($resource) {
    var service = {};
    service.register = function(user, success, failure) {
        var User = $resource("/TicketGuru/rest/users");
        User.save({}, user, success, failure);
    };
    service.getAccountById = function(userId) {
        var User = $resource("/TicketGuru/rest/users/:paramUserId");
        return User.get({paramUserId:userId}).$promise;
    };
    service.userExists = function(user, success, failure) {
        var User = $resource("/TicketGuru/rest/users");
        var data = User.get({name:user.email, password:user.password}, function() {
            var users = data.userList;
            if(users.length !== 0) {
                success(user);
            } else {
                failure();
            }
        },
        failure);
    };
    service.getAllAccounts = function() {
          var User = $resource("/TicketGuru/rest/users");
          return User.get().$promise.then(function(data) {
            return data.users;
          });
      };
    return service;
})
.controller("LoginCtrl", function($scope, sessionService, accountService, $state) {
    $scope.login = function() {
        console.log("Trying to login");
        accountService.userExists($scope.user, function(user) {
            sessionService.login($scope.user).then(function() {
                $state.go("home");
            });
        },
        function() {
            alert("Error logging in user");
        });
    };
})
.controller("RegisterCtrl", function($scope, sessionService, $state, accountService) {
    $scope.register = function() {
        accountService.register($scope.user,
        function(returnedData) {
            sessionService.login($scope.user).then(function() {
                $state.go("home");
            });
        },
        function() {
            alert("Error registering user");
        });
    };
})
.controller("AccountSearchCtrl", function($scope, users) {
    $scope.users = users;
});