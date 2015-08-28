$(document).ready(function() {
    $('.navigation > li > a').each( function(){
        var $this = $(this);
        $newLI = $('<li>').append( $this.clone() );
        $newLI.insertBefore($this.next('ul').find('.first'));
    });
    
    $("ul li ul").hide();
    
    $(".level-1").click(function(event) {
        $("ul li ul").hide();
        $(this).children("li ul").toggle();     
    });
    
    $(".level-1 > a").click(function(event) {
        event.preventDefault(); 
    });
});
