const http = require('http');
const fs = require('fs');

const PORT = 8080;

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    console.log(`server is running on http://localhost:${8080}`);
    grades(res);
}).listen(PORT);

const grades = (res) => {
    let gradeList = [
        {name: "Abraham", grade: 99},
        {name: "Bill", grade: 95},
        {name: "Curt", grade: 100},
        {name: "David", grade: 90}
    ];
    fs.writeFile('grades.txt', JSON.stringify(gradeList), (err)=>{
        if (err) throw err;
        res.write('data saved');
        res.end;
    })
}