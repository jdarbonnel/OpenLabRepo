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
  "offset" : 0100, 
  "conferenceDetails" : [
      {
          "spnamePretty" : "Home Office", 
          "schedname" : "jldarbonnel", 
          "spaceCap" : 1, 
          "videoConferencing" : "Y", 
          "tpscreen" : "DX80", 
          "proxyStatus" : "PUBLIC", 
          "tpScreenNumber" : 2, 
          "EmailAddress" : "jldarbonnel@obsdemos.onmicrosoft.com"
      }, 
      {
          "spnamePretty" : "Poolside", 
          "schedname" : "jldarbonnel(6)", 
          "spaceCap" : 6, 
          "videoConferencing" : "N", 
          "tpscreen" : null, 
          "tpScreenNumber" : null, 
          "EmailAddress" : "jldarbonnel@obsdemos.onmicrosoft.com"
      }, 
      {
          "spnamePretty" : "Theater", 
          "schedname" : "jldarbonnel (8)", 
          "spaceCap" : 8, 
          "videoConferencing" : "Y", 
          "tpscreen" : null, 
          "proxyStatus" : "PUBLIC",
          "tpScreenNumber" : null, 
          "EmailAddress" : "jldarbonnel@obsdemos.onmicrosoft.com"
      }
  ], 
  "dstOffset" : 60
}