import { ROOTDIR } from "./global.js";//all the global data and initialization
import fs from "fs"
 
/////////import all the controllers
fs.readdirSync(ROOTDIR+"/src/controllers").forEach(function(file) {
    import (ROOTDIR+"/src/controllers/"+file)
});

///////////end of main