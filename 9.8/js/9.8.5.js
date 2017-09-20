window.onload=function () {
var ul=document.getElementsByTagName("ul")[0];

    document.oncontextmenu=function (event) {
        var event=event||window.event;
        ul.style.display="block";
        ul.style.top=event.clientY+"px";
        ul.style.left=event.clientX+"px";
        return false;
    }
}