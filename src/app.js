(function(angular) {
    var app = angular.module('myApp', ['myAppService', 'ui.bootstrap']);
    app.controller('MainCtrl', ['$scope', 'LogService', function($scope, logService) {
        var vm = this;
        vm.message = 'Hello, Grunt with Angular!';
        logService.log('info', vm.message);
        logService.log('error', vm.message);
        logService.log('warn', vm.message);
        vm.change = function() {
            vm.message = 'Message changed via button click!';
        };

    }]);
})(window.angular);
