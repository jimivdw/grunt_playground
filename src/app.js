(function(angular) {
    var app = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'mainCtrl']); // jshint ignore: line
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/register");
        //
        // Now set up the states
        $stateProvider
            .state('register', {
                url: "/register",
                template: "<span style=\"color:red;\">free registration!</span>"
            })
            .state('login', {
                url: "/login",
                template: "<ul ng-repeat=\"item in items\"><span style=\"color:brown;\">{{item}}</span></ul>",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            });
    });

})(window.angular);
