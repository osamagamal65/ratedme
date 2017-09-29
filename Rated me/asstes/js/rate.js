$(document).ready(function(){
$('#container').addClass('animated pulse')
   $('#msg').click(function(){
       $(this).addClass('animated pulse');
   });
    

    
    var per = $('#per').val();
     $('#per-s').text(per);
    
   $( '#per' ).change(function() {
   per = $(this).val();
       $('#per-s').text(per);
});
        var soul = $('#soul').val();
     $('#soul-s').text(soul);
    
   $( '#soul' ).change(function() {
   var soul= $(this).val();
       $('#soul-s').text(soul);
});
            var mor = $('#mor').val();
     $('#mor-s').text(soul);
    
   $( '#mor' ).change(function() {
   var mor = $(this).val();
       $('#mor-s').text(mor);
});
            var look = $('#look').val();
     $('#look-s').text(look);
    
   $( '#look' ).change(function() {
   var look= $(this).val();
       $('#look-s').text(look);
});
            var inte = $('#inte').val();
     $('#inte-s').text(inte);
    
   $( '#inte' ).change(function() {
   var inte = $(this).val();
       $('#inte-s').text(inte);
});
  
});