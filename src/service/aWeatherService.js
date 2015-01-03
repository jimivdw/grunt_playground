(function(angular) {
    console.log('init WeatherService'); // jshint ignore:line
    angular.module('ServiceModule')
        .service('WeatherService', ['$http', 'LogService', function($http, LogService) {
            return {
                get: function(url) {
                    LogService.log('info', 'use LogService in WeatherService');
                    return $http.get(url);
                }
            };
        }]);
})(window.angular);
