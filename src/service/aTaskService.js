(function(angular) {
    console.log('init TaskService'); // jshint ignore:line
    angular.module('TaskServiceModule', [])
        .service('TaskService', ['LogService', function(LogService) {
            return {
                getTaskById: function(id) {
                    LogService.log('info', 'use LogService in TaskService');
                    return {
                        'id': id,
                        'name': 'task-' + id
                    };
                }
            };
        }]);
})(window.angular);
