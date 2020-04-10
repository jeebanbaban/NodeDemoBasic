const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
        if(err) throw err
        res.writeHead(200,{"content-type":"text/plain"})
        res.write(data)
        res.end()
    })

    
}).listen(3000,()=>{console.log("Server is running on port 3000...")})
