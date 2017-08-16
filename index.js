const express = require('express'); // Writes handlers for requests with different HTTP verbs at different URL paths (routes). Integrates with "view" rendering engines in order to generate responses by inserting data into templates. Sets common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response. Adds additional request processing "middleware" at any point within the request handling pipeline.
const fs = require('fs'); //Reads the contents of a file into memory.

const exphbs = require('express-handlebars'); //Handlebars is a logic-less templating engine that dynamically generates your HTML page. It’s an extension of Mustache with a few additional features. Mustache is fully logic-less but Handlebars adds minimal logic thanks to the use of some helpers (such as if, with, unless, each and more) that we’ll discuss further in this article. As a matter of fact, we can say that Handlebars is a superset of Mustache.

const app = express();
