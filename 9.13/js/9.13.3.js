var xmlhttp;
function loadXMLDoc(url,cfunc)
{
    if (window.XMLHttpRequest)
    {// IE7+, Firefox, Chrome, Opera, Safari 代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// IE6, IE5 代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=cfunc;
    xmlhttp.open("get",url,true);
    xmlhttp.send(null);
}

loadXMLDoc("http://localhost:8080/pratice/index.jsp",function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("content").innerHTML=xmlhttp.responseText;
    }
});


