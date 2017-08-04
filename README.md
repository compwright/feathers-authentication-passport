# feathers-authentication-passport

A generic [PassportJS](http://passportjs.org) strategy adapter for [feathers-authentication](https://github.com/feathersjs/feathers-authentication).

## Installation

```
npm install feathers-authentication-passport --save
```

## Compatibility

* `feathers-authentication@1.x` and above

## Usage

In most cases initializing the `feathers-authentication-passport` module is as simple as doing this:

```js
app.configure(authentication(settings));
app.configure(passportAuthentication({
  name: settings.passport.name, // defaults to 'passport' if not specified
  strategy: new PassportStrategy(settings.passport, Verifier) // required
}));
```

See the examples/ directory for a complete example.

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
