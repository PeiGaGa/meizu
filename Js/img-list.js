
var index = 0;
var timer = setInterval(autoPlay,2000);

function autoPlay(){
    index++;
    $('#img-list > li').eq(index).fadeIn(500).siblings().fadeOut();

    $('.banner-nav-list > li').eq(index).addClass('active').siblings().removeClass('active');

    if(index == $('#img-list > li').length-1){
        index = -1;
    }
};

$('.banner-nav-list').on('click','li',function(){
    index = $(this).index() -1;
    $('#img-list > li').eq(index).show();
})