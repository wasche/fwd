jQuery.fn.log = function(msg){
  console.log("%s: %o", msg, this);
  return this;
};

(function($){
  $('.editable')
    .each(function(){
      var elems = $(this).find('.edit').css('visibility', 'hidden');
      $(this).mouseenter(function(){
        elems.css('visibility', 'visible');
      })
      .mouseleave(function(){
        elems.css('visibility', 'hidden');
      });
    });
})(jQuery);
