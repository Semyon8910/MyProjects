let express = require('express');
let app = express();
let port = 8080;
let url = 'localhost';
// const names = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah", "Ian", "Julia"];
// const students = names.map((name, index) => ({
//   id: index + 1,
//   name: name,
//   grade: Math.floor(Math.random() * 51) + 50
// }));
const students = [
    { id: 1, name: 'Alice', grade: 87 },
    { id: 2, name: 'Bob', grade: 59 },
    { id: 3, name: 'Charlie', grade: 63 },
    { id: 4, name: 'Diana', grade: 80 },
    { id: 5, name: 'Evan', grade: 92 },
    { id: 6, name: 'Fiona', grade: 90 },
    { id: 7, name: 'George', grade: 83 },
    { id: 8, name: 'Hannah', grade: 86 },
    { id: 9, name: 'Ian', grade: 93 },
    { id: 10, name: 'Julia', grade: 98 }
  ];

app.get('/', (req, res)=>{
    res.send(students);
})

app.get('/:id', (req, res)=>{
    const id = req.params.id-1;
    res.send(students[id]);
})
  
app.listen(port, url, ()=>{
    console.log(`http://${url}:${port}`);
});