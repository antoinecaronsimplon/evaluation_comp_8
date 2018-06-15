(function($){

    // Header function

    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
    })

    // Footer function

    // $('#footer__icon').click(function(e){
    //     e.preventDefault();
    //     $('body').toggleClass('with--sidebar');
    // });  

    // $( '#header__icon' ).click(function() {
    //     $( 'body' ).toggleClass( 'with--sidebar' );
    //   });
    
    // $( '#footer__icon' ).click(function() {
    //     $( 'body' ).toggleClass( 'with--sidebar' );
    //   });

    
})(jQuery);