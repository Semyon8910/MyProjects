var http = require('http');
var fs = require('fs');

http.createServer((request,response)=>{
    response.end("up and running :)")
}).listen(8080);
console.log("server at: http://localhost:8080");

let myInfo = {
    "name":"Zeev",
    "age":50,
    "address" : "qiryat yam",
    "password" : "ssshhhhhh",
}

fs.writeFile('info.txt',JSON.stringify(myInfo),(err,file)=>{
        if (err) throw err;
});

fs.readFile('info.txt', (err,data)=>{
    if (err) {throw err} else {
    info = JSON.parse(data);
    console.log(info.name, info.address);
    }
});
