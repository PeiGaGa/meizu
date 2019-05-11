$(function(){
    $("#lanGuage").on('mouseover',function(){
        $('#checkout').css({"display":"block"});
    }).on('mouseout',function(){
        $('#checkout').css('display','none');
    });
    $("#ining-1").on('mouseover',function(){
        $("#ining-1 img").attr('src',"./catimages/c14.png");
        $('.shaoma img').attr("src","./catimages/c7.png");
            $('.shaoma').css({"display":"block"});  
    
    }).on('mouseout',function(){
        $('.shaoma').css({"display":"none"});
        $("#ining-1 img").attr('src',"./catimages/c4.png");  
    });
    $("#ining-2").on('mouseover',function(){
        $("#ining-2 img").attr('src',"./catimages/c23.png");
        $('.shaoma img').attr("src","./catimages/c15.jpg");
            $('.shaoma').css({"display":"block"});  
    
    }).on('mouseout',function(){
        $('.shaoma').css({"display":"none"});
        $("#ining-2 img").attr('src',"./catimages/c9.png");  
    });

    $("#ining-3").on('mouseover',function(){
        $("#ining-3 img").attr('src',"./catimages/16.png");
        
    
    }).on('mouseout',function(){
       
        $("#ining-3 img").attr('src',"./catimages/c8.png");  
    });

    $("#ining-4").on('mouseover',function(){
        $("#ining-4 img").attr('src',"./catimages/c5.png");
        
    
    }).on('mouseout',function(){
       
        $("#ining-4 img").attr('src',"./catimages/c21.png");  
    });
  
}) 
