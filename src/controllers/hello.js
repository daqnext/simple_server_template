import { app,ROOTDIR } from "../global.js";//all the global data and initialization
import {HelloWorld} from "../manager/HelloWorld.js"

app.get('/hello/world', (req, res) => {
    res.send(HelloWorld.echo());
})
