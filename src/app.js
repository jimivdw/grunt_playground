(function(angular) {
    console.log('init MyAppModule'); // jshint ignore:line
    var app = angular.module('MyAppModule', ['ui.bootstrap', 'ui.router', 'ControllerModule']); 
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/register");
        //
        // Now set up the states
        $stateProvider
            .state('register', {
                url: "/register",
                templateUrl: "partial/user-service/register.html",
            })
            .state('login', {
                url: "/login",
                // template: "<ul ng-repeat=\"item in items track by $index\"><span style=\"color:brown;\">{{$index}}: {{item}}</span></ul>",
                templateUrl: "partial/user-service/login.html",
                controller: ['$scope', function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }]
            });
    }]);

})(window.angular);
