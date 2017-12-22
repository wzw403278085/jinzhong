$(document).ready(function () {
   $(".main .mainL .tab a").click(function () {
       var index=$(this).index();
       $(this).addClass("cur").siblings().removeClass("cur");
       $(this).parents(".mainL").next().find(".content").eq(index).addClass("curr").siblings().removeClass("curr");
   });
//   企业掠影
    $(".main .mainR .company ul li").click(function () {
        var index=$(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".company").next().find(".boxC").eq(index).addClass("curr").siblings().removeClass("curr");
    });
});