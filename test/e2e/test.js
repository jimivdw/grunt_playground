describe('index page', function() {
    beforeEach(function() {
        browser().navigateTo('src/index.html');
        sleep(1);
    });

    it('redirect works', function() {
        expect(browser().location().path()).toBe('');
    });

});
