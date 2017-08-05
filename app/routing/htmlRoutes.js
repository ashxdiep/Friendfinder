// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


//to export app
module.exports = function(app) {

  app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "/../public/survery.html"));
  });

  //if no mathching is found, go to home
  app.use(function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
