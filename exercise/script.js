let bwIndex = 0;
let rgIndex = 0;
let bwcolor = false;
let rgColor = false;
document.getElementById("black/white").addEventListener("click",() =>{
    bwcolor = !bwcolor
    document.getElementById("black/white").style.backgroundColor = bwcolor ? "white" : "black";
    socket.send()
});

document.getElementById("red/green").addEventListener("click",() =>{
    rgIndex++;
    if(rgIndex%2 == 0) {
    document.getElementById("red/green").style.backgroundColor = "red";
    } else {
    document.getElementById("red/green").style.backgroundColor ="green";
    }
})
