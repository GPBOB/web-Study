window.onload=function () {
    var event=event||window.event;
    window.onclick=function (event) {
        alert("坐标：["+event.clientX+","+event.clientY+"]");
    }

}