const dispText = ()=>{
    const userText = document.getElementById("text").value;
    var result="";
    for (var index=userText.length-1;index>=0;index--) {
        result+=userText[index];
    }
    document.getElementById("textDisp").innerText = result;
}

