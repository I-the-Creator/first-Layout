$(function () {   
    // $("a.btn").click(function () {   //  только к <а> с классом btn
    // var elementClick = $(this).attr("href")
    // var destination = $(elementClick).offset().top;
    // jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    // return false;
    // });

    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
    $('a.call-btn').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#myModal') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
    });
    $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
    });
});






  
    


