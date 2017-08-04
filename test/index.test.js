const assert = require('assert');
const feathers = require('feathers');
const authentication = require('feathers-authentication');
const passportAuth = require('../src');
const Strategy = require('passport-anonymous').Strategy;

describe('feathers-authentication-local', () => {
  it('basic functionality', () => {
    assert.equal(typeof passportAuth, 'function');
  });

  describe('initialization', () => {
    let app;

    beforeEach(() => {
      app = feathers();
      app.configure(authentication({ secret: 'supersecret' }));
    });

    it('throws an error if strategy is omitted', () => {
      assert.throws(() => {
        feathers().configure(passportAuth());
      });
    });

    it('throws an error if passport has not been registered', () => {
      assert.throws(() => {
        feathers().configure(passportAuth({ strategy: new Strategy() }));
      });
    });
  });
});
