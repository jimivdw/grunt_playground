describe('MainCtrl', function() {
    var scope, ctrl, LogService;
    
    beforeEach(module('mainCtrl'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {
            '$scope': scope,
            LogService: {
                log: function() {}
            }
        });
    }));

    it('should initialize with default message', function() {
        scope.$digest();
        assert.equal(ctrl.message, 'Hello, Grunt with Angular!');
    });

    it('should initialize with default message', function() {
        scope.$digest();
        ctrl.change();
        assert.equal(ctrl.message, 'You click 1 time!');
        ctrl.change();
        assert.equal(ctrl.message, 'You click 2 times!');
    });

});
