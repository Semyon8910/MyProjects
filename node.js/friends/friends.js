var http = require('http');
var url = require('url');
var myData = require('./dataAdd');
const webServerPort = 8080;

http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<head><meta charset=UTF-8></head>');
    var query = url.parse(req.url,true).query;
    res.write(`שלום ${myData.addName(query.name)} ${myData.addFamilyName(query.familyName)} ראינו שאתה גר ב${myData.addCity(query.city)} תוגל לקחת טרמפ את ${myData.addFriendName(query.friendName)}`);
    res.end();
}).listen(webServerPort);

