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
        url: "build",
        type: "post",
        dataType: "text",
        data: json,
        success: function (result) {
            $("#form-json").hide();
            $("#spin-load").show();
            setTimeout(function () {
                $("#spin-load").hide();
                $("#url-download").attr("href", result);
                $("#api-document").show();
            }, 500);

        }
    });
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
});