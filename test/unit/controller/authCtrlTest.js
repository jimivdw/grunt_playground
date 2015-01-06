describe('AuthCtrl', function() {
    var scope, ctrl, LogService, $httpBackend;

    beforeEach(module('ControllerModule'));

    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        scope = $rootScope.$new();
        ctrl = $controller('AuthCtrl', {
            '$scope': scope,
            LogService: {
                log: function() {},
                fn: function(message) {
                    return {
                        'data': message
                    };
                }
            }
        });
        $httpBackend = _$httpBackend_;
        // for any url...
        $httpBackend.whenGET(/.*/).respond([{
            id: 1,
            name: "cloudy"
        }]);
    }));

    it('should change message when button is clicked', function() {
        scope.$digest();
        var registerUser = {
            'name': 'user1',
            'password': 'pass1',
            'repeatPassword': 'pass1'
        };
        ctrl.register(registerUser);
        assert.deepEqual(ctrl.registerUser, registerUser);

        var loginUser = {
            'name': 'user2',
            'password': 'pass2'
        };
        ctrl.login(loginUser);
        assert.deepEqual(ctrl.loginUser, loginUser);

    });

});
