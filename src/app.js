(function(angular) {
    console.log('init MyAppModule'); // jshint ignore:line
    var app = angular.module('MyAppModule', ['ui.bootstrap', 'ui.router', 'DirectiveModule', 'ControllerModule', 'CoffeeTestModule']);
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/register");
        //
        // Now set up the states
        $stateProvider
            .state('register', {
                url: "/register",
                templateUrl: "partial/auth/register.html",
            })
            .state('login', {
                url: "/login",
                templateUrl: "partial/auth/login.html",
                controller: ['$scope', function($scope) { // jshint ignore: line
                    // $scope.items = ["A", "List", "Of", "Items"];
                }]
            });
    }]);
})(window.angular);
