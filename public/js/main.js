// create the editor
var container = document.getElementById("jsoneditor");
var options = {};
var editor = new JSONEditor(container, options);

// set json
var json = {
    "appName": "Blog",
    "mongoURL": "mongodb://Test123:Test123@ds145299.mlab.com:45299/dbtest123",
    "port": 2308,
    "authenticate": true,
    "posts": {
        "id": "Number",
        "title": "String",
        "author": "String"
    },
    "comments": {
        "id": "Number",
        "body": "String",
        "postId": "Number"
    },
    "profile":{
        "name": "Number"
    }
};

// var json = {
//     "appName": "CongTy",
//     "mongoURL": "mongodb://Test123:Test123@ds145299.mlab.com:45299/dbtest123",
//     "port": 2308,
//     "authenticate": true,
//     "nhanvien": {
//         "nvID": "Number",
//         "hoten": "String",
//         "gioitinh": "String",
//         "luong": "String",
//         "pbID": "Number"
//     },
//     "phongban": {
//         "pbID": "Number",
//         "tenPB": "String"
//     }
// }
editor.set(json);

// get json
var json = editor.get();

function buildAPI() {
    document.getElementById("api-build").style.display = 'none';
    document.getElementById("building").style.display = 'block';
    setTimeout(function () {
        var json = editor.get();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("url-download").href = this.responseText;
                document.getElementById("api-document").style.display = 'block';
                document.getElementById("building").style.display = 'none';
            }
        };
        xhttp.open("POST", "/build", true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.send(JSON.stringify(json));
    }, 1000);
}