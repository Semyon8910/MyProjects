// var dogsEndPiont = "https://random.dog/woof.json"

// setInterval(async () => {
//     const dogData = await fetch(dogsEndPiont);
//     const dogImage = await dogData.json();
//     console.log(dogImage);
//     document.getElementById("dog").src = dogImage.url;
// },10000);

class RandomImage{
    constructor (endPoint) {
        this.endPoint=endPoint;
    }

    get getDog(){
        fetch(this.endPoint).then((object)=>{
            object.json().then((data)=>{
                dog.src = data.url;
            })
        })
    }    
}

var dogImage = new RandomImage("https://random.dog/woof.json");
setInterval(dogImage.getDog,10000);

class FoxImage extends RandomImage{
    get getFox(){
        fetch(this.endPoint).then((object)=>{
            object.json().then((data)=>{
                fox.src = data.url;
            })
        })
    }    
}
var foxImage = new FoxImage("https://randomfox.ca/floof/");
setInterval(foxImage.getFox,10000);


