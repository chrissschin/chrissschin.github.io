
$(document).ready(function(){
    
    var footer = $('#footer')
    var extra = 80;

    footer.css({ opacity: '0', display: 'block' });

    $(window).scroll(function() {
        
    var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop();
    var documentHeight = $(document).height();

  


        console.log( 'Scroll length: ' + scrolledLength + ' Document height: ' + documentHeight );
        
            
    if( scrolledLength >= documentHeight ) {
        
        footer
            .addClass('bottom')
            .stop().animate({ bottom: '0', opacity: '1' }, 300);

    }
    else if ( scrolledLength <= documentHeight && footer.hasClass('bottom') ) {           
            footer
            .removeClass('bottom')
            .stop().animate({ bottom: '-100', opacity: '0' }, 300);

    } 
    });
    
});
