let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=e873e6a2-66c1-494f-a677-f5e77348edb0&q=`;
$(()=> {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    $("#search").on("click", ()=>{
        let city = $("#cityName").val();
    $.get(url+city, (data) => {
        let records = data.result.records;
        console.log(records);
        for (let index = 0; index < records.length; index++){
            var marker = L.marker([records[index].Lat, records[index].Long]).addTo(map);
        }

});
});
});