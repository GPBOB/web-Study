window.onload=function () {
    var inp=document.getElementsByTagName("input");

    for(var i=0;i<=inp.length;i++){
    inp[i].onfocus=function () {
            this.style.backgroundColor="#334556";
        }
        inp[i].onblur=function () {
            this.style.backgroundColor="";
        }
    }
}