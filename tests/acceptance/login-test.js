import setupAcceptance, { setupSession } from '../helpers/setup-acceptance';

describe('Acceptance: Login', function() {
  setupAcceptance();

  context('when not logged in', function() {
    setupSession(function (server) {
      this.loginUser = false;
      this.server = server;
    });

    it ('should work', function () {
      visit('/');
      andThen(() => {
        expect(currentPath()).to.equal('index');
      });
      percySnapshot(this.test + ' | Logged out');
    });
  });

  context('when logged in', function() {
    setupSession(function (server) {
      this.loginUser = false;
      this.server = server;
    });

    it ('should work', function () {
      visit('/');
      andThen(() => {
        expect(currentPath()).to.equal('index');
      });
      andThen(() => {
        this.server.create('user', {_currentLoginInTest: true});
      })
      click('a.LoginButton');
      andThen(() => {
        expect(currentPath()).to.equal('index');
      });
      percySnapshot(this.test + ' | Logging in');

      /* click('.UserAvatar a'); */
      visit('/account');
      andThen(() => {
        expect(currentPath()).to.equal('account');
      });
      percySnapshot(this.test + ' | Account');

      click('a:contains("Logout")');
      andThen(() => {
        expect(currentPath()).to.equal('account');
        expect(
          server.schema.users.first()._currentLoginInTest
        ).to.equal(false);
        //server.schema.users.first().destroy();
      });
      percySnapshot(this.test + ' | After logout');
    });
  });

});
