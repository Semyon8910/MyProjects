const elements = document.getElementsByTagName("input");
    for (var index=0;index<elements.length;index++) {
        elements[index].addEventListener("focusin",(singleElement)=>{
            singleElement.target.style.backgroundColor = "yellow;";
        });
        elements[index].addEventListener("focusout",(singleElement)=>{
            singleElement.target.style.backgroundColor = "white";
        });
    }

// document.getElementsByTagName("input").addEventListener("focus",yellow());

