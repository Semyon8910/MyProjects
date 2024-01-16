var carNumbers = [];
var allCars = [];
var imageUrl = [];
var imageCount = 5;
var carInfo = "";
var carEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
var data = ["manufacturer","model","color","gasoline","year","nextTest","km"]
var table=`
<form id="carForm" action="javascript:addCar()">
<input type="number" id="carNumber" placeholder="car number" required/> <br/><br/>
`

for (var index=0; index<6; index++) {
   table+=`
   <input type="text" id="index${index}" placeholder="${data[index]}"disabled/><br/><br/>`
}
table+=`
<input type="number" id="index6" placeholder="${data[6]}" required/><br/><br/>
<input type="URL" id="index7" placeholder="image url"/>
<input type="button" value="upload image" id="imageBtn"/>you can upload <span id="count">${imageCount}</span> images more<br/><br/>
<input type="submit" value="add car" id="addCar"/>
<input type="reset" value="reset"/><br/><br/>
</form>
<hr/>
<div id="carTable"></div>`

document.getElementById("mySite").innerHTML = table;

document.getElementById("imageBtn").addEventListener("click",() => {
    imageUrl.push(document.getElementById("index7").value);
    document.getElementById("index7").value = "";
    imageCount--;
    document.getElementById("count").innerHTML = imageCount;
    });

const addCar = ()=>{
    if (validateCar(document.getElementById("carNumber").value)) {
        alert("car already exists");
        return;
    }
    carInfo.km = document.getElementById("index6").value;
    carInfo.images = imageUrl;
    imageUrl = [];
    imageCount = 5;
    document.getElementById("count").innerHTML = imageCount;
    addCarData(carInfo);
    allCars.push(carInfo);
    createTable();
    document.getElementById("carForm").reset();
}

const validateCar = (carNumber) => {
    for (index=0;index<allCars.length;index++) {
        if (allCars[index].mispar_rechev==carNumber){
            return true;
        }
    }
    return false;
} 


document.getElementById("carNumber").addEventListener("focusout",async ()=>{
    carInfo = await getCarAPI(document.getElementById("carNumber").value);
    updateFields(carInfo);
});

const updateFields = ()=>{
    document.getElementById("index0").value = carInfo.tozeret_nm;
    document.getElementById("index1").value = carInfo.kinuy_mishari;
    document.getElementById("index2").value = carInfo.tzeva_rechev;
    document.getElementById("index3").value = carInfo.sug_delek_nm;
    document.getElementById("index4").value = carInfo.moed_aliya_lakvish;
    document.getElementById("index5").value = carInfo.tokef_dt;
}

//tell the computer that we will using asynchronicity function
const getCarAPI= async(carNumber)=>{
    const response = await fetch(carEndPoint+carNumber);
    const res = await response.json();   
    return res.result.records[0];
}

//create table :)
const createTable = ()=>{
    var tableHeader = `
        <table>
            <tr>
                <th>car number</th>
                <th>manufacturer</th>
                <th>model</th>
                <th>color</th>
                <th>gasoline</th>
                <th>year</th>
                <th>test</th>
                <th>km</th>
                <th>images</th>
            </tr>
    `
    var tableBody = ()=>{
        var allrows = "";
        for (var index=0;index<allCars.length;index++){
            allrows+=addCarData(allCars[index]);
        }
        return allrows;
    }

    var tableFooter = '</table>'
    document.getElementById("carTable").innerHTML = tableHeader+tableBody()+tableFooter;
}

//get single car row in table
const addCarData = (carInfo)=>{  
    return `
        <tr>
            <td>${carInfo.mispar_rechev}</td>
            <td>${carInfo.tozeret_nm}</td>
            <td>${carInfo.kinuy_mishari}</td>
            <td>${carInfo.tzeva_rechev}</td>
            <td>${carInfo.sug_delek_nm}</td>
            <td>${carInfo.moed_aliya_lakvish}</td>
            <td>${niceDate(carInfo.tokef_dt)}</td>
            <td>${carInfo.km}</td>
            <td><img src="${carInfo.images[0]}" width=100/><img src="${carInfo.images[1]}" width=100/><img src="${carInfo.images[2]}" width=100/><img src="${carInfo.images[3]}" width=100/><img src="${carInfo.images[4]}" width=100/></td>
        </tr>
    `;
}

const niceDate = (uglyDate)=>{
    //return uglyDate;
    //new date will be now an array, with size of - sign (+1)
    var newDate = uglyDate.split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}
