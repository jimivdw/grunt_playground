(function(angular) {
    console.log('init LogService'); // jshint ignore:line
    angular.module('ServiceModule')
        .service('LogService', ['$log', function($log) {
            return {
                log: function(type, message) {
                    $log[type](message);
                },
                fn: function() {
                    return {
                        'data': 'fn-data'
                    };
                }
            };
        }]);
})(window.angular);
