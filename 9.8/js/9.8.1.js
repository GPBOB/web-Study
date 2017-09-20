window.onload=function () {
    var li=document.getElementsByTagName("li");
    var news=[
    "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
    "不满意|部分有破损，与卖家描述的不符，不满意",
    "一般|质量一般，没有卖家描述的那么好",
    "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
    "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ];
    var newss=document.getElementsByClassName("newss");

    for(let i=0;i<=li.length;i++){

    li[i].onmouseover=function () {
    li[i].style.backgroundPosition="0px,-20px";
}
    li[i].onmouseout=function () {
    li[i].style.backgroundPosition="0px,0px";
}
    }
}