/// JavaScript File

function show_info(value) {
    console.log(value);

    if(value == ""){
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            /// update document.getElementById with Jquery
            /// document.getElementById('demo').innerHTML = xhttp.responseText;
            $('#demo').html(xhttp.responseText);
        }
    };
    xhttp.open("GET", value + '.html', true);
    xhttp.send();

    
}