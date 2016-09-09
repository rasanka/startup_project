angular.module('ngBoilerplate.account', ['ui.router','ngResource'])
.config(function($stateProvider) {
    $stateProvider.state('register', {
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
    .factory('accountService', function ($resource) {
        var service = {};
        service.register = function (user, success, failure) {
            var User = $resource("/TicketGuru/rest/users");
            User.save({}, user, success, failure);
        };
        service.userExists = function(user, success, failure) {
            var User = $resource("/TicketGuru/rest/users");
            var data = User.get({email:user.email, password:user.password}, function() {
                    var users = data.users;
                    if(users.length !== 0) {
                        success(user);
                    } else {
                        failure();
                    }
                },
                failure);
        };
        return service;
    })
.controller("RegisterCtrl", function($scope, $state, accountService) {
    $scope.register = function() {
        accountService.register($scope.user, function (returnedData) {
            alert("User registered successfully");
        }, function () {
            alert("Error registering user");
        });
        alert('user registered with ' + $scope.user.email + " and " + $scope.user.password);
    };
});