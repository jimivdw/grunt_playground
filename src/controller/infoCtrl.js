(function(angular) {
    console.log('init InfoCtrl'); // jshint ignore:line
    var app = angular.module('ControllerModule');
    app.controller('InfoCtrl', ['$scope', 'LogService',
        function($scope, LogService) { // jshint ignore: line
            var vm = this, default_message = 'You are not logged in';
            vm.message = default_message;
            $scope.$on('LOGIN_EVENT', function(event, data) {  // jshint ignore: line
                vm.message = 'Welcome ' + data.user.name +'!';
            });
            $scope.$on('LOGOUT_EVENT', function(event, data) { // jshint ignore: line
                vm.message = default_message;
            });

        }
    ]);

})(window.angular);
