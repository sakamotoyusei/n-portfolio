luxy.init();

var windowW = $(window).width();
var maxHight = 0.1 * windowW +8;

for(i=0;i<5;i++){
    function on(i){
        setTimeout(function(){
            $(".inner1").eq(i).addClass("on");
            $(".inner2").eq(i).css("height",maxHight+"px");
        },i*300);
    }
    on(i);
}

$(window).resize(function(){
    var windowW = $(window).width();
    var maxHight = 0.1 * windowW +8;
    $(".inner2").css("height",maxHight+"px");
});

$(window).scroll(function(){
    var nowHeight = $(window).scrollTop();
    if( nowHeight > 300){
        var changeHeight = 100 - (nowHeight - 300)/5;
        $(".inner1").css("height",changeHeight + "%");
    }else{
        $(".inner1").css("height","100%");
    }
});

