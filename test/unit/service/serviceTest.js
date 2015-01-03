describe('LogService', function() {
    var LogService, log;
    beforeEach(module('ServiceModule'));
    beforeEach(inject(function(_LogService_, _$log_) {
        LogService = _LogService_;
        log = _$log_;
    }));

    describe('#log', function() {
        it('should log message based on the type passed in', function() {

            clearLog(log);
            LogService.log('info', 'info message');
            assert.equal(log.info.logs, 'info message');
            assert.equal(log.error.logs, '');
            assert.equal(log.warn.logs, '');

            clearLog(log);
            LogService.log('error', 'error message');
            assert.equal(log.error.logs, 'error message');
            assert.equal(log.info.logs, '');
            assert.equal(log.warn.logs, '');

            clearLog(log);
            LogService.log('warn', 'warn message');
            assert.equal(log.warn.logs, 'warn message');
            assert.equal(log.info.logs, '');
            assert.equal(log.error.logs, '');
        });

    });

});

function clearLog(log) {
    for (_log in log) {
        log[_log]['logs'] = [];
    }
}
