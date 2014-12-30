var assert = require('assert');
var User = require('./User.js').User;

describe('User', function() {
    describe('#getFullName', function() {
        it('should return correct full name', function() {
            var fname = 'John',
                lname = 'Smith';
            assert.equal('Smith, John', new User(fname, lname).getFullName());
        });
    });
});
