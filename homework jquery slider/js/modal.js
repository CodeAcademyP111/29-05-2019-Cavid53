$(document).ready(function () {
    $(".cover").click(function () {
        $(".modal_content").hide();
    })

    $(".cover span").click(function(){
        $(".modal_content").hide();
    })

    $(".main img").click(function () {

        var img = $(this).data("img");
        var msg = $(this).data("msg");
        var index = $(this).data("index");
        $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
        $(".slider").children().eq(1).text(msg);
        $(".active").removeClass("active");
        $(".navigation").children().eq(index).children().eq(1).addClass("active");
        $(".modal_content").show();
    })

    $(".navigation .item").click(function(){
        var img = $(this).data("img");
        var msg = $(this).data("msg");
        $(".active").removeClass("active");
        $(this).children().eq(1).addClass("active");
        $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
        $(".slider").children().eq(1).text(msg);
        
       
    })

    $(".right").click(function(){
        var next=$(".active").parent().next()
        if(next.length!=0){
            var img= next.data("img");
            var msg=next.data("msg");
            $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
            $(".slider").children().eq(1).text(msg);
            $(".active").removeClass("active");
            next.children().eq(1).addClass("active");
        }else{
            var img= $(".navigation").children().eq(0).data("img");
            var msg=$(".navigation").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
            $(".slider").children().eq(1).text(msg);
            $(".active").removeClass("active");
            $(".navigation").children().eq(0).children().eq(1).addClass("active");
        }
      
})

     $(".left").click(function(){
        var prev=$(".active").parent().prev()
        if(prev.length!=0){
            var img= prev.data("img");
            var msg=prev.data("msg");
            $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
            $(".slider").children().eq(1).text(msg);
            $(".active").removeClass("active");
            prev.children().eq(1).addClass("active");
            
        
        }else{
            var img= $(".navigation").children().eq(0).data("img");
            var msg=$(".navigation").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src", `img/lg/${img}`);
            $(".slider").children().eq(1).text(msg);
            $(".active").removeClass("active");
            $(".navigation").children().eq(3).children().eq(1).addClass("active");
        }

     })




    













})