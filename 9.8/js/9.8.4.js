window.onload=function () {
    var img=document.getElementsByTagName("img");
    var big_img=document.getElementsByClassName("big_img")[0];
    var big=document.getElementsByClassName("big")[0];


    for(let i=0;i<img.length;i++){
    img[i].onmouseover=function () {
    big.style.display="block";

        var img1 = new Image();
        img1.src = img[i].src;


            big_img.src=img1.src;
        
    }
img[i].onmousemove=function () {
    var event=event||window.event;
    big.style.top=event.clientY+20+"px";
    big.style.left=event.clientX+"px";
}
    img[i].onmouseout=function () {
        big.style.display="none";
    }
}
}