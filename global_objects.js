// __dirname;
// __filename;
//require
//console
//buffer
//module
//exports

console.log(__dirname)//OUTPUT== /home/jeeban/nodejs/nodeDemo
console.log(__filename)//OUTPUT== /home/jeeban/nodejs/nodeDemo/global_objects.js
var getMainJsAccess = require('./main')// Access and Call all the properties which is written in main.js file
console.log(getMainJsAccess.name)// get exports name from main.js file