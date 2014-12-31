(function(angular) {
    var app = angular.module('WeatherServiceModule', []);
    app.service('WeatherService', ['$http', function($http) {
        return {
            get: function(url) {
                return $http.get(url);
            }
        };
    }]);
})(window.angular);
