$(document).ready(function() {
      
  $(window).scroll( function(){
      $('.fade-in-section').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var top_of_object = $(this).position().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window >= ((bottom_of_object + top_of_object) / 2) ){
              
              $(this).animate({'opacity':'1'},1750);
          }
          
      }); 
  
  });

  $(window).scroll( function(){
    $('.hovbtn1').each( function(i){
        
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var top_of_object = $(this).position().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window >= ((bottom_of_object + top_of_object) / 2) ){
            
            $(this).animate({'opacity':'1'},1750);
        }
        
    }); 

});

$(window).scroll( function(){
  $('h4').each( function(i){
      
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var top_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if( bottom_of_window >= ((bottom_of_object + top_of_object) / 2) ){
          
          $(this).animate({'opacity':'1'},1750);              
      }
      
  }); 

});
  
});