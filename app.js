// Import express module to use it in my app
var express = require('express');
var todoController = require('./controllers/todoConroller');

var app = express();

// Set template engine
app.set('views engine', 'ejs');

// Setup static files
app.use('/assets', express.static('./public'));
//  fire controller
todoController(app);

//Listen to the Port
app.listen(3000, "127.0.0.1");
console.log(' I am listening to the port 3000');

var bodyParser = require('body-parser');