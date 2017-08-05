var friendsData = require ("../data/friends");

//to export it to server.js
module.exports = function (app){


  //posting to the friends api
  app.post("/api/friends", function (req, res){

    //push the new friend into the data
    friendsData.push(req.body);
    console.log("i'm in");
    var minDiff = 200;
    var potential;
    //for every index in data arrays,
    for (var i = 0; i < friendsData.length - 1; i++){

      var diff = 0;
      //compare new friend results array for each number in the array
      for (var j = 0; j < friendsData[i].results.length; j++){
         diff += Math.abs(parseInt(req.body.results[j]) - parseInt(friendsData[i].results[j]));

      }
      console.log("on round: " + i + " diff is " + diff);
      //for each person comparing it to if diff is smaller than min diff
      if (diff < minDiff){

       //update min diff
       minDiff = diff;

       //log the potential best friend (the object)
       potential = friendsData[i];
     }
    }
    console.log(minDiff);
    console.log(potential);


    //send back the data
    res.json(potential);


  });

  app.get("/api/friends", function(req, res){
    res.json(friendsData);
  });

  app.post("/", function (req,res){
    res.redirect("/");
  });
};
