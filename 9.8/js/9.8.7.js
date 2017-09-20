window.onload=function () {
    var div=document.getElementsByTagName("div")[0];


    div.onclick=function () {
        var i=0;
         var timer=setInterval(function () {
            div.style.display=i++%2==1?"none":"block";
            if(i>6){
                clearInterval(timer);
            }
        },40);
    }

    }
