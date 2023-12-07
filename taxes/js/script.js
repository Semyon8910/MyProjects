var checkMasr = () => {
    var sal = document.getElementById("sal").value;
    const masr = sal/10;
    document.getElementById("masr").innerText=masr;
}
var checkHomesh = () => {
    var sal = document.getElementById("sal").value;
    const homesh = sal/5;
    document.getElementById("homesh").innerText=homesh;
}