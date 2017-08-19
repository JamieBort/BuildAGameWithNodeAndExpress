// call the various packages

// Writes handlers for requests with different HTTP verbs at different URL paths (routes). Integrates with "view" rendering engines in order to generate responses by inserting data into templates. Sets common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response. Adds additional request processing "middleware" at any point within the request handling pipeline.
// https://www.npmjs.com/package/express
// $ npm install express
const express = require('express');

//Handlebars is a logic-less templating engine that dynamically generates your HTML page. It’s an extension of Mustache with a few additional features. Mustache is fully logic-less but Handlebars adds minimal logic thanks to the use of some helpers (such as if, with, unless, each and more) that we’ll discuss further in this article. As a matter of fact, we can say that Handlebars is a superset of Mustache.
// https://www.npmjs.com/package/express-handlebars
// $ npm install handlebars
const exphbs = require('express-handlebars');

// Used the npm package express-session to set up user authentication.
// Used to store the word the user is trying to guess in a session.
// $ npm install express-session
const session = require('express-session');

// Node.js body parsing middleware.
// Returns middleware that only parses json.
// https://www.npmjs.com/package/body-parser-json
// $ npm install body-parser
const bodyParser = require('body-parser');

// Reads the contents of a file into memory.
// https://www.npmjs.com/package/fs-extra
// might need to fix this and/or add notes above it
const fs = require('fs');

// different/additional comments from above?
const app = express();

// call the engine boilerplate


// call static
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// call session
// see https://www.npmjs.com/package/express-session
// need to fix this
app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
}))


// ================
app.get('/', function (req, res) {
  res.send('Hello World')
})
// ================


// call bodyparser
// might need to fix this
app.use(bodyParser.urlencode({ extend: true }));


// call validator
// must come after bodyparser


// app.listen
app.listen(3000, function () {
  console.log('Successfully started express application!');
  console.log('Listening on port 3000');
});
