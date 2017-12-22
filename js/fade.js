$(document).ready(function () {
    alert("123")
    var tu=$(".box ul li");
    var n=0;
    for(i=0;i<tu.length;i++){
        if (i==0){
            $(".pageN").append("<a class='cur'></a>");
        }else{
            $(".pageN").append("<a></a>");
        }
    }
    $(".box .pageN a").click(function () {
        var index=$(this).index();
        n=index;
        $(".box ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    // var i=$(".box ul li").length-1;
    $(".box .leftBtn").click(function () {
        n--;
        if (n<0){
            n=tu.length-1;
        }
        $(".box ul li").eq(n).fadeIn("slow").siblings().fadeOut("slow");
        $(".box .pageN a").eq(n).addClass("cur").siblings().removeClass("cur");
    });
    $(".box .rightBtn").click(function () {
        n++;
        if (n>tu.length){
            n=0;
        }
        $(".box ul li").eq(n).fadeIn("slow").siblings().fadeOut("slow");
        $(".box .pageN a").eq(n).addClass("cur").siblings().removeClass("cur");
    });
    function lunbo(){
        $(".box .rightBtn").click();
    }
    var timer=setInterval(lunbo,3000);
    $(".box").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(lunbo,3000);
    });
});