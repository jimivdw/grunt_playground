(function(angular) {
    var app = angular.module('mainCtrl', ['myAppService', 'WeatherServiceModule']);
    app.controller('MainCtrl', ['$scope', 'LogService', 'WeatherService', function($scope, LogService, WeatherService) {
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
        WeatherService.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
            .success(function(data, status, headers, config) { // jshint ignore:line
                vm.weather = data;
            })
            .error(function(data, status, headers, config) { // jshint ignore:line
                // console.log(data);
            });


    }]);
})(window.angular);
