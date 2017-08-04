const feathers = require('feathers');
const errorHandler = require('feathers-errors/handler');
const auth = require('feathers-authentication');
const AnonymousStrategy = require('passport-anonymous');
const passportAuth = require('../src/');

// Initialize the application
const app = feathers()
  // Configure feathers-authentication
  .configure(auth({ secret: 'super secret' }))
  .configure(passportAuth({ name: 'anonymous', strategy: new AnonymousStrategy() }))
  .use(errorHandler());

app.listen(4000);

console.log('Feathers app started on 127.0.0.1:4000');
