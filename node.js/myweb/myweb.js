var http = require("http");
var url = require("url");
var fs = require("fs");
const webPort = 8080;
http.createServer(function (request, response) {
    var query = url.parse(request.url,true).query;
    var fileName = query.lang == 'heb' ? 'index1.html' : 'index.html';
    fs.readFile(fileName, function(err,data){
        if (err) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
        }
        response.end();
        console.log(data);
    });
    //ההודעה למסך תרוץ קודם, מכיוון שקריאת הקובץ היא אסינכורנית
    //console.log("done reading index.html");
}).listen(webPort);
console.log (`http://localhost:${webPort}`);