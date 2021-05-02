var output = "";
function linkstart() {
    var style = "";
    var units = "";
    var urls = "";
    var form = document.getElementById("form");
    for (var i = 0; i < form.tag.length; i++) {
        if (form.tag[i].checked) {
            tags = form.tag[i].value;
        };
    };
    for (var i = 0; i < form.unit.length; i++) {
        if (form.unit[i].checked) {
            units = form.unit[i].value;
        };
    };
    const kirito = document.forms['form'];
    const texts = kirito.elements.text.value;
    const id = kirito.elements.id.value;
    const color = kirito.elements.color.value;
    const size = kirito.elements.size.value;
    const title = kirito.elements.title.value;
    urls = kirito.elements.url.value;
    style = "' style='" + "color:" + color + '; font-size:' + size + units + ";'";
    output = '<' + tags + " id='" + id + style + "title='" + title + "' href='" + urls + "'>" + texts + '</' + tags + '>';
    document.getElementById('put').innerHTML = output;
}
function show() {
    alert('代碼為：' + output);
}
