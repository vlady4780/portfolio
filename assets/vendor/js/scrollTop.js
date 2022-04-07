$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').animate({
                opacity:1
            },1)
        } else {
            $('.scrollToTop').animate({
                opacity:0
            },1);
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},100);
        return false;
    });
    
});