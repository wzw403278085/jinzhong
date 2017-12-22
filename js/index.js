window.onload=function () {
    var Ban=document.getElementById("banner");
    var ul=document.getElementById("ul");
    var li=ul.getElementsByTagName("li");
    var pageN=document.getElementById("pageN");
    var icon=pageN.getElementsByTagName("a");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var index=0;
    var imgH=li[0].getElementsByTagName("img")[0].height;
    // alert(imgH);
    Ban.style.height=imgH+"px";
    var animated=false;
    for(var i=0;i<li.length-2;i++){
        var a=document.createElement("a");
        if (i==0){
            a.setAttribute("class","cur");
        }
        pageN.appendChild(a);
    }
    /*动画*/
    function animate(offset) {
        animated=true;
        var speed=offset/20;
        var newLeft=parseInt(ul.style.left)+offset;
//            alert(ul.style.left);
        var go=function () {
            if ((speed>0&&parseInt(ul.style.left)<newLeft)||(speed<0&&parseInt(ul.style.left)>newLeft)){
                ul.style.left=parseInt(ul.style.left)+speed+"%";
                setTimeout(go,50);
            }else {
                if (newLeft<-100*icon.length){
                    ul.style.left=-100+"%";
                }
                if (newLeft>-100){
                    ul.style.left=-100*icon.length+"%";
                }
                animated=false;
            }
        };
        go()
    }
    /**/
    for(var j=0;j<icon.length;j++) {
        icon[j].index = j;
        icon[j].onclick = function () {
            if(animated){
                return;
            }
            var y=(this.index-index)*(-100);
            animate(y);
            index = this.index;
            showBtn();
        }
    }
    /**/
    function showBtn() {
        for(var x=0;x<icon.length;x++){
            if (icon[x].getAttribute("class")=="cur"){
                icon[x].className="";
            }
        }
        icon[index].className="cur";
    }
    /*prev*/
    prev.onclick=function () {
        if (animated){
            return;
        }
        index--;
        if (index<0){
            index=icon.length-1;
        }
        animate(100);
        showBtn()
    };
    next.onclick=function () {
        if (animated){
            return;
        }
        index++;
        if (index>icon.length-1){
            index=0;
        }
        animate(-100);
        showBtn();
    };
    function lunbo(){
        next.onclick();
    }
    var timer=setInterval(lunbo,3000);
    Ban.onmouseover=function () {
        clearInterval(timer);
    };
    Ban.onmouseout=function (){
        timer=setInterval(lunbo,3000);
    };
};

$(document).ready(function () {

    var tu=$(".news .box ul li");
    var n=0;
    $(".news .box .pageN p a").click(function () {
        var index=$(this).index();
        alert(index);
        n=index;
        $(".main .news .box ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
        $(this).addClass("cur").siblings().removeClass("cur");
    });
    $(".news .box .rightBtn").click(function () {
        n++;
        if (n>tu.length){
            n=0;
        }
        $(".box ul li").eq(n).fadeIn("slow").siblings().fadeOut("slow");
        $(".box .pageN a").eq(n).addClass("cur").siblings().removeClass("cur");
    });
    function lunbo(){
        $(".news .box .rightBtn").click();
    }
    var timer=setInterval(lunbo,3000);
    $(".news .box").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(lunbo,3000);
    });
});

