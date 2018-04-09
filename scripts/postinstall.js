var mongojs = require('mongojs');
var Promise = require('bluebird');
require('dotenv').config();

// Heroku Addon Case - use mongo connection string
if(process.env.MONGODB_URI){
  process.env.DB = process.env.MONGODB_URI
}

// check to see if the DB exists. If not, create a sample builings collection.
db = mongojs(process.env.DB, ['buildings']);

db.buildings.findOne({}, function(err, docs){
  if(err){
    console.log(err);
    process.exit(1);
  }

  if(docs){
    // collection exists
    console.log('collection exists, moving on.');
    process.exit(0);
  }else{
    // collection doesn't exist!
    console.log('collection doesn\'t exist. Creating a new one!');
    db.buildings.insert(sampleBuilding, function(err, docs){
      if(err){
        console.log(err);
        process.exit(1);
      }else{
        console.log('Success!');
        process.exit(0);
      }
    })
  }
});

var sampleBuilding = { 
  "buildingId" : "FRA", 
  "buildingName" : "Neuilly", 
  "address1" : "112/114 Blvd Charles de Gaulle", 
  "address2" : "", 
  "city" : "Neuilly", 
  "state" : "IdF", 
  "phone" : "", 
  "type" : "OpenLab Demo Office", 
  "lattitude" : "", 
  "longitude" : "", 
  "floors" : [
      {
          "floorID" : "1", 
          "floorName" : "1ST FLOOR", 
          "drawingName" : "", 
          "status" : "Online"
      }
  ], 
  "timeZoneId" : "Europe/Paris", 
  "offset" : 60, 
  "conferenceDetails" : [
      {
          "spnamePretty" : "MX700 Neuilly", 
          "schedname" : "mx700.neuilly (8)", 
          "spaceCap" : 8, 
          "videoConferencing" : "Y", 
          "tpscreen" : "MX700 Neuilly", 
          "proxyStatus" : "PUBLIC", 
          "tpScreenNumber" : 2, 
          "EmailAddress" : "mx700.neuilly@demotogether.com"
      }, 
      {
          "spnamePretty" : "dx80.neuilly", 
          "schedname" : "dx80.neuilly (2)", 
          "spaceCap" : 2, 
          "videoConferencing" : "Y", 
          "tpscreen" : null, 
          "tpScreenNumber" : null, 
          "EmailAddress" : "dx80.neuilly@demotogether.com"
      }, 
      {
          "spnamePretty" : "Theater", 
          "schedname" : "mx300.rennes (6)", 
          "spaceCap" : 6, 
          "videoConferencing" : "Y", 
          "tpscreen" : null, 
          "proxyStatus" : "PUBLIC",
          "tpScreenNumber" : null, 
          "EmailAddress" : "mx300.rennes@demotogether.com"
      }
  ], 
  "dstOffset" : 60
}