
/*
 * GET home page.
 */

var fs = require("fs");
var path = require("path");

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.upload = function(req, res){
  var file;
  console.log( req.files );
  
  if( req.files && req.files.file ){
    file = req.files.file;
  }
  
  if( !file ) {
    res.send( {status: "error" } );
    return;
  }
  
  console.log( file.path );
  console.log( file.name );
  
  fs.renameSync(file.path, path.join( "public", "images", file.name ) );
  res.send( {status: "success" } );
}