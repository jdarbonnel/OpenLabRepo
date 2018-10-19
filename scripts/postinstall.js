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
          "spnamePretty" : "DX80 Neuilly", 
          "schedname" : "DX80 Coeur Defense (4)",
          "spaceCap" : 4, 
          "videoConferencing" : "Y", 
          "tpscreen" : "DX00 Neuilly", 
          "proxyStatus" : "PUBLIC", 
          "tpScreenNumber" : 1, 
          "EmailAddress" : "DX80.neuilly@demotogether.com"
      }, 
      {
        
      },
      {
        "spnamePretty" : "Castelane", 
        "schedname" : "MX700 Coeur Defense (10)", 
        "spaceCap" : 6, 
        "videoConferencing" : "Y", 
        "tpscreen" : null, 
        "proxyStatus" : "PUBLIC",
        "tpScreenNumber" : null, 
        "EmailAddress" : "mx700.neuilly@demotogether.com"
      }

      
  ], 
  "dstOffset" : 60
  
}
