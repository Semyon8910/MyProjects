let countryName = ["israel","austria","germany","spain","france","ukraine"];
    $.get(`https://restcountries.com/v3.1/all`,(data)=> showCountries(data),"json");

    const showCountries = (data) => {
    for (let index=0; index<countryName.length; index++){
        console.log(data[0]);
        $("div").append(data[index].name.common);
    }}