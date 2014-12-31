(function(angular) {
    angular.module('myAppService', [])
        .service('LogService', ['$log', function($log) {
            return {
                log: function(type, message) {
                    $log[type](message);
                },
                fn: function() {
                    $log.info('test');
                }
            };
        }]);
})(window.angular);
