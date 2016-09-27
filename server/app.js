var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } ); // urinal encode
var port = process.env.PORT || 8080;

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
}); // end server up

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/index.html') );
}); // end base url
