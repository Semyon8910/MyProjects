let tableMany="";
document.addEventListener("event:balagan", (data) => {
    // console.log(data);
    tableMany += `
    <tr>
        <td>${data.detail.city}</td>
        <td>${data.detail.district}</td>
        <td>${data.detail.candidates}</td>
        <td>${data.detail.sumcandidates}</td>
    </tr>
    `;
    $("#table2").append(tableMany);
});

// document.addEventListener("event:finished", () => {
    
// });