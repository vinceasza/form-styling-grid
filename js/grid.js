$(document).ready(function(){

  function setDivHeight(columns){
    var highest = 0;
    $('.column-4').css('height', 'auto');

    columns.each(function(){
      $this = $(this);
      var height = $this.outerHeight();
      if (height > highest){
        highest = height;
      }
    });
    columns.each(function(){
      $this = $(this);
      $this.height(highest);
    });
  }

  $(window).on('load resize', function(e){
    setDivHeight($('.column-4'), 200);
  });


});
