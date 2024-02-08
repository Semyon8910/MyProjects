$.get("https://data.gov.il/api/3/action/datastore_search?resource_id=a9588029-8dd6-4c6f-b4ff-e8ca6413642f", (data) => showResults(data),"json");

const showResults = (data) => {
    let positive = 0;
    let negative = 0;
    let inWork = 0;
    for (let index=0; index<data.result.records.length; index++){
        if (data.result.records[index].corona_result == "חיובי") {
            positive++;
        } else if(data.result.records[index].corona_result == "שלילי") {
            negative++
        } else if(data.result.records[index].corona_result == "בעבודה") {
            inWork++
        }
    }
    $("table").append(`
        <tr>
            <td>חיובי</td>
            <td>שלילי</td>
            <td>בעבודה</td>
        </tr>
        <tr>
            <td>${positive}</td>
            <td>${negative}</td>
            <td>${inWork}</td>
        </tr>
    `)
    console.log(data.result);
}