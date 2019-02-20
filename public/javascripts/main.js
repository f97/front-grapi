// create the editor
var container = document.getElementById("json-config");
var options = {};
var editor = new JSONEditor(container, options);
// set json
var json = {
    "appName": "Demo",
    "mongoURL": "mongodb://Test123:Test123@ds145299.mlab.com:45299/dbtest123",
    "port": 2308,
    "authenticate": true,
    "posts":
    {
        "id": "Number",
        "title": "String",
        "author": "String"
    }
    ,
    "comments":
    {
        "body": "String",
        "postId": "Number"
    }
};
editor.set(json);

function buildAPI() {
    var json = editor.get();
    $.ajax({
        url : "build",
        type : "post",
        dataType:"text",
        data : json,
        success : function (result){
            $("#demo").html(result);
            $("#form-json").hide();
            $("#api-document").show();
        }
    });
    // var json = editor.get();
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("demo").innerHTML =
    //             this.responseText;
    //         document.getElementById("form-json").style.display = 'none';
    //         document.getElementById("api-document").style.display = 'block';
    //     }
    // };
    // xhttp.open("POST", "/build", true);
    // xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // xhttp.send(JSON.stringify(json));
}
$(document).ready(function () {
    // Basic
    $('#simpleTree').jstree({
        'core': {
            'themes': {
                'responsive': false
            }
        },
        'types': {
            'default': {
                'icon': 'fa fa-folder-open'
            },
            'file': {
                'icon': 'fa fa-file'
            }
        },
        'plugins': ['types']
    });

    // Checkbox
    $('#checkboxesTree').jstree({
        'core': {
            'themes': {
                'responsive': false
            }
        },
        'types': {
            'default': {
                'icon': 'fa fa-folder'
            },
            'file': {
                'icon': 'fa fa-file'
            }
        },
        'plugins': ['types', 'checkbox']
    });

    // Drag & Drop
    $('#dragdropTree').jstree({
        'core': {
            'check_callback': true,
            'themes': {
                'responsive': false
            }
        },
        'types': {
            'default': {
                'icon': 'fa fa-folder'
            },
            'file': {
                'icon': 'fa fa-file'
            }
        },
        'plugins': ['types', 'dnd']
    });

});