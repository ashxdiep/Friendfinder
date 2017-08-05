var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3002;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen for port
app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
});
