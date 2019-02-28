// create the editor
var container = document.getElementById("jsoneditor");
var options = {};
var editor = new JSONEditor(container, options);

// set json
var json = {
    "appName": "Demo",
    "mongoURL": "mongodb://Test123:Test123@ds145299.mlab.com:45299/dbtest123",
    "port": 2308,
    "authenticate": true,
    "posts": {
        "id": "Number",
        "title": "String",
        "author": "String"
    },
    "comments": {
        "body": "String",
        "postId": "Number"
    }
};
editor.set(json);

// get json
var json = editor.get();

function buildAPI() {
    var json = editor.get();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url-download").href = this.responseText;
            document.getElementById("api-build").style.display = 'none';
            document.getElementById("api-document").style.display = 'block';
        }
    };
    xhttp.open("POST", "/build", true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify(json));
}