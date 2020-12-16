# feathers-authentication-passport

[![Build Status](https://travis-ci.org/compwright/feathers-authentication-passport.png?branch=master)](https://travis-ci.org/compwright/feathers-authentication-passport)
[![Code Climate](https://codeclimate.com/github/compwright/feathers-authentication-passport/badges/gpa.svg)](https://codeclimate.com/github/compwright/feathers-authentication-passport)
[![Test Coverage](https://codeclimate.com/github/compwright/feathers-authentication-passport/badges/coverage.svg)](https://codeclimate.com/github/compwright/feathers-authentication-passport/coverage)
[![Dependency Status](https://img.shields.io/david/compwright/feathers-authentication-passport.svg?style=flat-square)](https://david-dm.org/compwright/feathers-authentication-passport)
[![Download Status](https://img.shields.io/npm/dm/feathers-authentication-passport.svg?style=flat-square)](https://www.npmjs.com/package/feathers-authentication-passport)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

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
