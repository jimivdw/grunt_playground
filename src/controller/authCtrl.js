(function(angular) {
    console.log('init AuthCtrl'); // jshint ignore:line
    var app = angular.module('ControllerModule');
    app.controller('AuthCtrl', ['$scope', 'LogService',
        function($scope, LogService) {
            var vm = this;
            vm.register = function(user) {
                LogService.log('info', 'register:' + JSON.stringify(user));
            };
            vm.login = function(user) {
                LogService.log('info', 'login:' + JSON.stringify(user));
            };

        }
    ]);

})(window.angular);
