const fs = require("fs")

//----------READ File Asynchronous----------------
    // fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    //     if(err) throw err
    //     console.log(data)
    // })
    // console.log("read file sucessfully")


    //----------READ File Synchronous----------------
    // try{
    //     var data = fs.readFileSync(__dirname+"/hello.txt","utf8")
    //     console.log(data)
    // }catch(e){
    //     console.log(e)
    // }
    // console.log("file read success")