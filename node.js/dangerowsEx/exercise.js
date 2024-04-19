let http = require('http');
let fs = require('fs');
const PORT = 8080;

http.createServer((req,res) => {
    res.end("running");
    }
    ).listen(PORT);

const count = () => {
    for (let index = 1; index < 1000; index++) {
        counter = index as String;
        fs.appendFile('log/logger.txt'),counter,(err,file)=>{
            counter
        }
    }
}