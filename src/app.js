(function(angular) {
    var app = angular.module('myApp', ['myAppService']);
    app.controller('MainCtrl', ['$scope', 'LogService', function($scope, logService) {
        $scope.message = 'Hello, Angular World!';
        logService.log('info', 'LogService works!');
        logService.log('error', 'LogService works!');
        logService.log('warn', 'LogService works!');

    }]);
})(window.angular);
