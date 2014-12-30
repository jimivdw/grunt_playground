(function(angular) {
    var app = angular.module('myApp', ['myAppService', 'ui.bootstrap']);
    app.controller('MainCtrl', ['$scope', 'LogService', function($scope, logService) {
        var vm = this, count = 0;
        vm.message = 'Hello, Grunt with Angular!';
        logService.log('info', vm.message);
        logService.log('error', vm.message);
        logService.log('warn', vm.message);
        vm.change = function() {
            vm.message = 'You click '+ (++count) +' time' + (count>1?'s':'') + '!';
        };

    }]);
})(window.angular);
