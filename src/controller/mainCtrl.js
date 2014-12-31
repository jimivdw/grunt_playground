(function(angular) {
    var app = angular.module('mainCtrl', ['myAppService']);
    app.controller('MainCtrl', ['$scope', 'LogService', function($scope, LogService) {
        var vm = this,
            count = 0;
        vm.message = 'Hello, Grunt with Angular!';
        LogService.log('info', vm.message);
        LogService.log('error', vm.message);
        LogService.log('warn', vm.message);
        vm.data = LogService.fn('test...');
        vm.change = function() {
            vm.message = 'You click ' + (++count) + ' time' + (count > 1 ? 's' : '') + '!';
        };

    }]);
})(window.angular);
