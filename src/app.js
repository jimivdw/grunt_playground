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
                templateUrl: "partial/auth/register.html",
            })
            .state('login', {
                url: "/login",
                // template: "<ul ng-repeat=\"item in items track by $index\"><span style=\"color:brown;\">{{$index}}: {{item}}</span></ul>",
                templateUrl: "partial/auth/login.html",
                controller: ['$scope', function($scope) { // jshint ignore: line
                    // $scope.items = ["A", "List", "Of", "Items"];
                }]
            });
    }]);

    app.directive('btnClick', ['$log', function($log) { // jshint ignore:line
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                count: '=',
                bType: '=',
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, elem, iAttrs, ngModel) { // jshint ignore:line
                elem.on('click', function() {
                    $scope.count++;
                    $scope.bType = $scope.count % 2 === 0 ? 'btn-primary' : 'btn-danger';
                    $scope.$apply();
                });
            }
        };
    }]);

})(window.angular);
