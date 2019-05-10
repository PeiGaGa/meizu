    

$(".nav-link").on('mouseover','li',function(){
    $(this).find('div').css('display','block');
    $('#nav').css('background-color','#fff');
    $(".nav-link  a,.logo-shop,.logo-logon").css('color','#333');
    $(this).find('a').css('color','#2e74f6');

}).on('mouseout','li',function(){

    $(this).find('div').css('display','none');
    $('#nav').css('background-color','');
    $(".nav-link  a,.logo-shop,.logo-logon").css('color','');
});


// $("#ys2").on('mouseover',function(){
//     $("#ys2-sx").css('display','block');
//     $('#nav').css('background-color','#fff');
//     $(".nav-link  a,.logo-shop,.logo-logon").css('color','#333');
//     $("#ys2 a").css('color','#2e74f6');
// });
// $("#ys2").on('mouseout',function(){
//     $('#ys2-sx').css('display','none');
//     $('#nav').css('background-color','');
//     $(".nav-link  a,.logo-shop,.logo-logon").css('color','');
// });


// $("#ys9").on('mouseover',function(){
//     $("#ys9-xz").css('display','block');
//     $('#nav').css('background-color','#fff');
//     $(".nav-link  a,.logo-shop,.logo-logon").css('color','#333');
//     $("#ys9 a").css('color','#2e74f6');
// });
// $("#ys9").on('mouseout',function(){
//     $('#ys9-xz').css('display','none');
//     $('#nav').css('background-color','');
//     $(".nav-link  a,.logo-shop,.logo-logon").css('color','');
// });

