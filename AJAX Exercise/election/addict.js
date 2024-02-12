let tableOne = "";
document.addEventListener("event:addict", (data) => {
    tableOne += `
    <tr>
        <td>${data.detail.city}</td>
        <td>${data.detail.district}</td>
        <td>${data.detail.candidates}</td>
        <td>${data.detail.sumcandidates}</td>
    </tr>
    `;

    $("#table1").append(tableOne);
});

// document.addEventListener("event:finished", () => {
//     console.log(tableOne);
    
// });