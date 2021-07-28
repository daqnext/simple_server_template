import express from 'express';
import path from 'path';
import minimist from 'minimist';
import e from 'express';

 

///process the args
var argv = minimist(process.argv.slice(2));

//
if(argv.config){

}

////////////////////////
var ROOTDIR=path.resolve();

////////////////////////
var app = express();
var PORT = 3000;

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
////////////////////////


export {app,ROOTDIR};

