import express from 'express';
import path from 'path';
import {args} from  '../configs/args.js'

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


export {args,ROOTDIR,app};

