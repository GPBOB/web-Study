window.onload=function () {
    var btn=document.getElementsByTagName("button");
    var div=document.getElementsByClassName("main")[0];

    btn[0].onclick=function () {
        var wid=div.offsetWidth;
        var hei=div.offsetHeight;
        var color=getComputedStyle(div).backgroundColor;
        console.log(color);
        alert("width="+wid+
        "\nheight="+hei+
        "\ncolor="+color);
    }
    btn[1].onclick=function () {
        div.style.width="250px";
        div.style.height="100px";
        div.style.backgroundColor="#dff324"
    }
    btn[2].onclick=function () {
        div.style.width="300px";
        div.style.height="200px";
        div.style.backgroundColor="#225D98"
    }
}