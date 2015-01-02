describe('index page', function() {
    beforeEach(function() {
        browser().navigateTo('src/index.html');
        sleep(1);
    });

    it('path works', function() {
        expect(browser().location().path()).toBe('/register');
    });

    it('click works', function() {
        element(':button').click();
        expect(element('#message').html()).toBe('You click 1 time!');
        element(':button').click();
        expect(element('#message').html()).toBe('You click 2 times!');
    });

    it('rest service works', function() {
        expect(element('#weather').html()).toContain('London');
    });

});
