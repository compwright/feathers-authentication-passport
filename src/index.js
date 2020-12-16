const debug = require('debug')('feathers-authentication-passport');

const defaults = {
  name: 'passport'
};

function init (options = {}) {
  return function passportAuth () {
    const app = this;
    const _super = app.setup;

    if (!app.passport) {
      throw new Error('Cannot find app.passport. Did you initialize feathers-authentication before feathers-authentication-passport?');
    }

    const name = options.name || defaults.name;

    if (!options.strategy) {
      throw new Error('A Passport strategy is required (set options.strategy).');
    }

    const strategy = options.strategy;

    app.setup = function () {
      const result = _super.apply(this, arguments);

      // Register 'passport' strategy with passport
      debug(`Registering ${name} passport authentication strategy`);
      app.passport.use(name, strategy);

      return result;
    };
  };
}

// Exposed Modules
Object.assign(init, {
  defaults
});

module.exports = init;
