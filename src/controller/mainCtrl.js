(function(angular) {
    console.log('init MainCtrl'); // jshint ignore:line
    var app = angular.module('ControllerModule');
    app.controller('MainCtrl', ['$scope', 'LogService', 'WeatherService', 'TaskService',
        function($scope, LogService, WeatherService, TaskService) {
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

            vm.loadWeather = function() {
                WeatherService.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
                .success(function(data, status, headers, config) { // jshint ignore:line
                    vm.weather = data;
                })
                .error(function(data, status, headers, config) { // jshint ignore:line
                    // console.log(data);
                });
            };

            LogService.log('info', TaskService.getTaskById('001'));
        }
    ]);

})(window.angular);
