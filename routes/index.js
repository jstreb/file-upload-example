
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
  console.log( req );
  if( req.files && req.files.file ){
    file = req.files.file;
  }
  
  if( !file ) {
    res.send( 
      { 
        status: "error",
        message: "No file was uploaded."
      } );
    return;
  }
  
  res.send( 
    {
      status: "success",
      fileName: file.name
    }
  );
}