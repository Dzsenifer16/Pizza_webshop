function sendRequest(url, method, body, callback){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.open(method, url)
    xhr.send(body)
}
export default function GetTermekek(){
    let url = "https://localhost:44357/api/Termekek"
    sendRequest(url, "GET", null, function(objektum){
        TermekekUrl(objektum)
    })
}

function TermekekUrl(objektum){
    console.log(objektum)
}
