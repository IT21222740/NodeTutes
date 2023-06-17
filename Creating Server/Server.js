//import http module
const http = require("http");

//creating server
const server = http.createServer((req,res)=>{
    res.writeHead(200, {
    'Content-Type': 'text/plain',
  })

   res.end("you have created server successFully")
})


server.listen(3000,()=>{
    console.log("Hi server is listning");
    
})
