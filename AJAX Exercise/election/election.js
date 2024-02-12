let url="https://data.gov.il/api/3/action/datastore_search?resource_id=ebcc8e6d-16df-43f9-97d6-a36f1912c9ed&q=";
let town = "";
$.get(url+town, (data) => {
    let tableOther = "";
    let records = data.result.records;
    records.forEach(item => {
        if (item.sumcandidates == 1){
            document.dispatchEvent(new CustomEvent("event:addict",{detail: item}));
        } else if (item.sumcandidates > 5){
            document.dispatchEvent(new CustomEvent("event:balagan",{detail: item}));
        } else {
            tableOther += `
        <tr>
            <td>${item.city}</td>
            <td>${item.district}</td>
            <td>${item.candidates}</td>
            <td>${item.sumcandidates}</td>
        </tr>
        `;
        }
    });
    $("#table3").append(tableOther);
});

const fixList = (serverList) => {
    let myList = serverList.replaceAll(",","\n");
    console.log(myList);
    // myList = myList.split(":");
    // let data="";
    // for (let index = 0; index < myList.length; index++){
    //     data+=myList[index];
    // }
    return myList;
}