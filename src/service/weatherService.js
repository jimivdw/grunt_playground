(function(angular) {
    angular.module('ServiceModule')
        .service('WeatherService', ['$http', function($http) {
            return {
                get: function(url) {
                    return $http.get(url);
                }
            };
        }]);
})(window.angular);
