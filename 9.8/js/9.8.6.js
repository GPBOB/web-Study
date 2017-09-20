window.onload=function () {
    var box=document.getElementById("box");
    var bLeft=bTop=bRight=bBottom=bCtrlKey= false;

    setInterval(function () {
if(bLeft){
    box.style.left=box.offsetLeft-10+"px";
}
else if(bRight){
    box.style.left=box.offsetLeft+10+"px";
}

if(bTop){
    box.style.top=box.offsetTop-10+"px";
}
else if(bBottom){
    box.style.top=box.offsetTop+10+"px";
}
limit();
    },30);

    //按下
    document.onkeydown=function () {
        var event=event||window.event;
        bCtrlKey=event.ctrlKey;

        switch (event.keyCode){
            case 37:
                bLeft=true;
                break;
            case 38:
                if(bCtrlKey){
                    var oldHeight=box.offsetHeight;
                    var oldWidth=box.offsetWidth;

                    box.style.width=box.offsetWidth*1.5+"px";
                    box.style.height=box.offsetHeight*1.5+"px";

                    box.style.left=box.offsetLeft-(box.offsetWidth-oldWidth)/2+"px";
                    box.style.top=box.offsetTop-(box.offsetHeight-oldHeight)/2+"px";
                    break;
                }

                bTop=true;
                break;
            case 39:
                bRight=true;
                break;
            case 40:
                if(bCtrlKey){
                    var oldHeight=box.offsetHeight;
                    var oldWidth=box.offsetWidth;

                    box.style.width=box.offsetWidth*0.75+"px";
                    box.style.height=box.offsetHeight*0.75+"px";

                    box.style.left=box.offsetLeft-(box.offsetWidth-oldWidth)/2+"px";
                    box.style.top=box.offsetTop-(box.offsetHeight-oldHeight)/2+"px";
                    break;
                }

                bBottom=true;
                break;
            case 97:
                if(bCtrlKey){
                    box.style.backgroundColor="green";
                }
                break;
            case 98:
                if(bCtrlKey){
                    box.style.backgroundColor="yellow";
                }
                break;
            case 99:
                if(bCtrlKey){
                    box.style.backgroundColor="blue";
                }
                break;
        }
        return false;
    }

    //释放
    document.onkeyup=function () {
        var event=event||window.event;
        switch (event.keyCode){
            case 37:
                bLeft=false;
                break;
            case 38:
                bTop=false;
                break;
            case 39:
                bRight=false;
                break;
            case 40:
                bBottom=false;
                break;
        }
    }

    function limit() {
        var win=[document.documentElement.clientWidth,document.documentElement.clientHeight];
        //防止上方溢出
        if(box.offsetTop<=0){
            box.style.top=0;
        }
        //防止左侧溢出
        if(box.offsetLeft<=0){
            box.style.left=0;
        }
        if(win[0]-box.offsetLeft-box.offsetWidth<=0){
            box.style.left=win[0]-box.offsetWidth+"px";
        }
        if(win[1]-box.offsetTop-box.offsetHeight<=0){
            box.style.top=win[1]-box.offsetHeight+"px";
        }
    }
}