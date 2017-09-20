// var xmlHttp=false;
// function createXMLHttpRequest() {
//     if(window.ActiveXObject){
//         try{
//             xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
//         }
//         catch (e){
//             try{
//                 xmlHttp=new ActiveXObject("Micrsoft.XMLHTTP");
//             }
//             catch (ee){
//                 xmlHttp=false;
//             }
//         }
//     }
//     else if (window.XMLHttpRequest){
//         try{
//             xmlHttp=new XMLHttpRequest();
//         }
//         catch(e){
//             xmlHttp=false;
//         }
//     }
// }


$(document).ready(function(){
    $.ajax({
        url:'http://192.168.9.5/jsonp_test1.jsp',
        dataType:"jsonp",
        jsonp:"jsonpcallback",
        success:function(data){
            var $ul = $("<ul></ul>");
            $.each(data,function(i,v){
                $("<li/>").text(v["id"] + " " + v["name"]).appendTo($ul)
            });
            $("#res").append($ul);
        }
    });
});