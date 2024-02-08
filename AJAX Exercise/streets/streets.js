let limit = 60835;
let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=${limit}`;
$.get(url, (data) => {
    let records = data.result.records;
    let streets = 0;
    let statistics = new Object();
    records.forEach(item => {
        if (statistics[item["שם_ישוב"]] === undefined) {
            statistics[item["שם_ישוב"]] = 1;
        } else {
        statistics[item["שם_ישוב"]]++;
        }
    });
    for (town in statistics) {
        $("table").append(`
            <tr>
                <td>${town}</td>
                <td>${statistics[town]}</td>
            </tr>
        `)
    }
    console.log(statistics);
})