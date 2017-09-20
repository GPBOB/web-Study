
window.onload=function () {
    var p=document.getElementsByTagName("p");
    var btn=document.getElementsByTagName("button");
    var month1=["January(1)","February(2)","March(3)","April(4)","May(5)","June(6)","July(7)",
        "Aguest(8)","September(9)","October(10)","November(11)","December(12)"];
    var number=[0,1,2,3,4,5,6,7,8,9];
    var colors=["red","green","blue","white","yellow","black","brown"];

    //插入数据
    p[0].innerHTML=month1;
    p[1].innerHTML=number;
    p[2].innerHTML=colors;
    //添加，删除第一项
btn[0].onclick=function () {
    if(btn[0].innerHTML=="删除一月"){
btn[0].innerHTML="添加一月";
month1.shift();
        p[0].innerHTML=month1;
    }
    else{
        btn[0].innerHTML="删除一月";
        month1.unshift("January(1)");
        p[0].innerHTML=month1;
    }
}

//添加，删除最后一项
    btn[1].onclick=function () {
        if(btn[1].innerHTML=="删除十二月"){
            btn[1].innerHTML="添加十二月";
            month1.pop();
            p[0].innerHTML=month1;
        }
        else{
            btn[1].innerHTML="删除十二月";
            month1.push("December(12)");
            p[0].innerHTML=month1;
        }
    }

    //复制
    btn[2].onclick=function () {
        var numm=p[1].innerHTML.split(",");
        p[1].innerHTML=numm.concat(numm);
    }
    //还原
    btn[3].onclick=function () {
        p[1].innerHTML=number;
    }

    //还原
    btn[4].onclick=function () {
        p[2].innerHTML=["red","green","blue","white","yellow","black","brown"];
    }
    //删除前三项
    btn[5].onclick=function () {
        p[2].innerHTML=colors.slice(3);
    }
//删除第二至第三项

    btn[6].onclick=function () {
        var col=p[2].innerHTML.split(",");
        col.splice(1,2);
        p[2].innerHTML=col;
    }

    //在第二项后插入
    btn[7].onclick=function () {
        var cols=p[2].innerHTML.split(",");
        cols.splice(1,0,"orange","purple");
        p[2].innerHTML=cols;
    }
    //替换第二项和第三项
    btn[8].onclick=function () {
        var colss=p[2].innerHTML.split(",");
        colss.splice(1,2,"#009900", "#0000ff")
        p[2].innerHTML=colss;
    }
}