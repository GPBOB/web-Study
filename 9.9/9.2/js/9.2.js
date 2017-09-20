window.onload=function () {
    var t1=document.getElementsByClassName("t1")[0];
    var ul=document.getElementsByClassName("main")[0];

    ul.onmouseover=function () {
        t1.style.display="block";
    }
    ul.onmouseout=function () {
        setTimeout(function () {
            t1.style.display="none";
        },1000);
    }
}