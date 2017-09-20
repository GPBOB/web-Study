window.onload=function () {

    var p=document.getElementsByTagName("span")[0];
    document.onkeydown=function (event) {

        p.innerHTML=event.keyCode;
        return false;
    }
    document.oncontextmenu=function () {
        return false;
    }
}