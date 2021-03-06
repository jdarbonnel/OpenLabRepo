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
  "conferenceDetails": [
    {
        "spnamePretty": "ROOM55 Coeur Defense",
        "schedname": "ROOM55 - Coeur Defense in Workshop Room (10-12) ",
        "spaceCap": 12,
        "videoConferencing": "Y",
        "tpscreen": "ROOM55CD Coeur Defense",
        "proxyStatus": "Public",
        "tpScreenNumber": 2,
        "EmailAddress": "room55cd@demotogether.com"
    },
    {
        "spnamePretty": "DX80Coeur Defense",
        "schedname": "DX80 Coeur Defense",
        "spaceCap": 4,
        "videoConferencing": "Y",
        "tpscreen": "DX80 Neuilly",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "DX80.neuilly@demotogether.com"
    },
    {
        "spnamePretty": "DX80 Coeur Defense",
        "schedname": "DX80 - Coeur Defense in Lab Room (4)",
        "spaceCap": 4,
        "videoConferencing": "Y",
        "tpscreen": "DX80 Neuilly",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "DX80.neuilly@demotogether.com"
    },
    {
        "spnamePretty": "DX70Coeur Defense",
        "schedname": "DX70 Coeur Defense",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 JLD",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.jld@demotogether.com"
    },
    {
        "spnamePretty": "DX70 Coeur Defense",
        "schedname": "DX70 - Coeur Defense in Open Space (2)",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 JLD",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.jld@demotogether.com"
    },
    {
        "spnamePretty": "MX300Paris Anjou",
        "schedname": "MX300 Paris Anjou",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.paris@demotogether.com"
    },
    {
        "spnamePretty": "MX300 Paris Anjou",
        "schedname": "MX300 - Paris Anjou in Showroom (10)",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.paris@demotogether.com"
    },
    {
        "spnamePretty": "SX10Paris Anjou",
        "schedname": "SX10 Paris Anjou",
        "spaceCap": 6,
        "videoConferencing": "Y",
        "tpscreen": "SX10 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "sx10.paris@demotogether.com"
    },
    {
        "spnamePretty": "SX10 Paris Anjou",
        "schedname": "SX10 Paris Anjou in Lounge (6)",
        "spaceCap": 6,
        "videoConferencing": "Y",
        "tpscreen": "SX10 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "sx10.paris@demotogether.com"
    },
    {
        "spnamePretty": "DX70Paris Anjou",
        "schedname": "DX70 Paris Anjou",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.paris@demotogether.com"
    },
    {
        "spnamePretty": "DX70 Paris Anjou",
        "schedname": "DX70 Paris Anjou in Corner (2)",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 Paris Anjou",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.paris@demotogether.com"
    },
    {
        "spnamePretty": "MX300Marseille",
        "schedname": "MX300 - Marseille",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Marseille",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.marseille@demotogether.com"
    },
    {
        "spnamePretty": "MX300 Marseille",
        "schedname": "MX300 - Marseille in Showroom (10)",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Marseille",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.marseille@demotogether.com"
    },
    {
        "spnamePretty": "MX300Bordeaux",
        "schedname": "MX300 Bordeaux",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Bordeaux",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.bordeaux@demotogether.com"
    },
    {
        "spnamePretty": "MX300 Bordeaux",
        "schedname": "MX300 - Bordeaux in Showroom (10)",
        "spaceCap": 10,
        "videoConferencing": "Y",
        "tpscreen": "MX300 Bordeaux",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "mx300.bordeaux@demotogether.com"
    },
    {
        "spnamePretty": "DX70 Rennes",
        "schedname": "DX70 Rennes",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 JLD",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.rennes@demotogether.com"
    },
    {
        "spnamePretty": "DX70 Rennes",
        "schedname": "DX70 - Rennes in Lounge (2)",
        "spaceCap": 2,
        "videoConferencing": "Y",
        "tpscreen": "DX70 RENNES",
        "proxyStatus": "Public",
        "tpScreenNumber": 1,
        "EmailAddress": "dx70.rennes@demotogether.com"
    }
],
"dstOffset": 60
  
}
