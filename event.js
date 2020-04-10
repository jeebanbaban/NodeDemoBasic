const events = require("events")
var event = new events.EventEmitter()

//---------Single event------------
// event.on("click",()=>{
// console.log("event fired....")
// })
// event.emit("click")


//-------------Multiple events------------
var first_event = ()=>{
    console.log("First Event...")
    event.emit("click2")
}
var second_event = ()=>{
    console.log("Second Event...")
    event.emit("click3")
}
var third_event = ()=>{console.log("Third Event...")}

event.on("click1",first_event)
event.on("click2",second_event)
event.on("click3",third_event)
event.emit("click1")


