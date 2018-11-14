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
  "buildingName" : "Coeur Def",
  "address1" : "100/110 ESPLANADE DU GNRAL DE GAULLE", 
  "address2" : "92400", 
  "city" : "Courbevoie", 
  "state" : "IdF", 
  "phone" : "", 
  "type" : "OpenLab Demo FRA Office", 
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
          "spnamePretty" : "DX80 Coeur Defense", 
          "schedname" : "DX80 Coeur Defense (4)",
          "spaceCap" : 4, 
          "videoConferencing" : "Y", 
          "tpscreen" : "DX80 Neuilly", 
          "proxyStatus" : "Public", 
          "tpScreenNumber" : 1, 
          "EmailAddress" : "DX80.neuilly@demotogether.com"
      }, 
      {
        "spnamePretty" : "ROOM55 Coeur Defense", 
        "schedname" : "ROOM55 (Dual) Coeur Defense (12)", 
        "spaceCap" : 12, 
        "videoConferencing" : "Y", 
        "tpscreen" : "ROOM55CD Coeur Defense", 
        "proxyStatus" : "Public",
        "tpScreenNumber" : 2, 
        "EmailAddress" : "room55cd@demotogether.com"
      },
      {
        "spnamePretty" : "MX300 Paris Anjou", 
        "schedname" : "MX300 Paris Anjou(10)", 
        "spaceCap" : 10, 
        "videoConferencing" : "Y", 
        "tpscreen" : "RMX300 Paris Anjou", 
        "proxyStatus" : "Public",
        "tpScreenNumber" : 1, 
        "EmailAddress" : "mx300.paris@demotogether.com"
      }

      
  ], 
  "dstOffset" : 60
  
}
