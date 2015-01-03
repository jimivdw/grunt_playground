(function(angular) {
    console.log('init ControllerModule'); // jshint ignore:line
    angular.module('ControllerModule', ['ServiceModule', 'TaskServiceModule']);
})(window.angular);
