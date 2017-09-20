

    var EventUtil = {
        addHandler:function (element,event,handler) {
            if (element.addEventListener){//是否兼容addEventListener
                element.addEventListener(event,handler,false);
            }
            else{
                element.attachEvent("on"+event,handler);//若不兼容则在事件前添加on，适用于ie系列
            }
        },
        removeHandler:function (element,event,handler) {
            if(element.removeEventListener){
                element.removeEventListener(event,handler);
            }
            else{
                element.detachEvent("on"+event,handler);
            }
        },
        addLoadHandler:function (handler) {
            this.addHandler(window,"load",handler);
        }
    };

    EventUtil.addLoadHandler(function () {
        var btn=document.getElementsByTagName("button");

        EventUtil.addHandler(btn[1],"click",function () {
            EventUtil.addHandler(btn[0],"click",handler);
            btn[0].innerHTML="我可以点击了";
        });

        EventUtil.addHandler(btn[2],"click",function () {
            EventUtil.removeHandler(btn[0],"click",handler);
            btn[0].innerHTML="毫无用处的按钮";
        });
       function handler() {
           alert("绑定成功");
       }
    });
