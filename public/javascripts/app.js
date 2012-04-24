(function($){
  $('.edit')
    .css('display', 'none')
    .each(function(){
      var elem = $(this);
      $(this).parent()
        .mouseenter(function(){
          elem.css('display', 'block');
        })
        .mouseleave(function(){
          elem.css('display', 'none');
        });
    });
})(jQuery);