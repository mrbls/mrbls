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

  $.getJSON("http://graph.facebook.com/mrbadgerandlittlestitch", function(d) {
    d.likes && $("#box_likes i").html(d.likes);
  });

  
  $(window).on("scroll", function(ev) {
    var top = $(window).scrollTop()

    if (top > 10 && !spritesVisible) {
      showSprites();
      spritesVisible = true;

    } else if (spritesVisible) {

    }
    
    if (top < 10 && spritesVisible) {
      /*
      hideSprites();
      spritesVisible = false;
      */
    }

    

  });
});
