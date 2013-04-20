$(function() {

  $('a[href*="#"]').click(function(event){
    //prevent the default action for the click event
    event.preventDefault();
 
    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;
 
    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];
 
    //get the top offset of the target anchor
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;

    // $('.navbar li').removeClass('active');

    // $(this).addClass('active').parent().addClass('active');
 
    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top}, 500);
  });

  // esta url tiene data de facebook de tu pagina, la estamos bucando.
  $.getJSON("http://graph.facebook.com/mrbadgerandlittlestitch", function(d) {
    // 'd' contiene la info que esta en esta pagina, de la cual sacamos los likes
    d.likes && $("#box_likes i").html(d.likes);
  });

  var spritesVisible = false;

  function showSprites() {
    $(".cloud").animate({
      top: 40
    }, function() {
      spritesVisible = true;
    });
  }

  function hideSprites() {
    $(".cloud").animate({
      top: 0
    });
  }
                                                                                              
                                                                                              
  $(window).on("scroll", function(ev) { // agarramos el evento scroll                         
    var top = $(window).scrollTop(); // sacamos cuanto esta scrolleado arriba                 
                                                                                              
    if (top > 10 && !spritesVisible) { // si el scroll es > 10px y las nubes no esta visibles...
      showSprites(); // mostramos las nubes llamando a function showSprites() de arriba
      spritesVisible = true; // marcamos que las nubes estan visibles
    }
  });

  $.deck('.slide'); // le decimos que los elementos con class='slide' son slides
  $('.next').click(function(ev) { // agarramos el click en el elemento con class='next'
      ev.preventDefault()
      $.deck('next'); // avanzamos al siguiente slide
    });

  $('.prev').click(function(ev) {
      ev.preventDefault()
      $.deck('prev');
    });
});
