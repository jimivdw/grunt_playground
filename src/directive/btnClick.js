(function(angular) {
    console.log('init btnClick'); // jshint ignore:line
    var app = angular.module('DirectiveModule');

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
