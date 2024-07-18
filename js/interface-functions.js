

function input(name) {
    return Number(document.getElementById(name).value);
}

function output(name, value, suffix) {
    document.getElementById(name).innerText = value.toFixed(1) + " " + suffix;
}

function outputRange(name, min, max, suffix) {
    document.getElementById(name).innerText = min.toFixed(1) + "–" + max.toFixed(1) + " " + suffix;
}

function generateLink() {
    let inputs = document.getElementsByTagName('input');

    let link = window.location.href;
    let pos = link.indexOf(".html");
    if (pos) {
        link = link.substring(0,pos+5) + "?";
    }else {
        link += "index.html"
    }

    for (let i=0; i<inputs.length; i++){
        let input = inputs[i];

        if (input.id === "link") {
            continue;
        }
        if (i){
            link += "&";
        }
        link += input.id + "=" + parseInt(input.value) ;
    }

    let comment = document.getElementById("comment").value;
    link += "&comment=" + comment;

    return encodeURI(link);
}

function copyInput(id){
    let val = document.getElementById(id).value;
    navigator.clipboard.writeText(val).then(() => {
        console.log("Копировали");
    })
    .catch(() => {
        console.log("Чо-то не смогли скопировать, бывает, давай сам");
    });
}
