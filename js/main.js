$(document).ready(function() {
  var images =  settings.background_images;
  var total_images = Object.keys(images).length -1; //-1 because images start at "1.jpg" (For non tech-savy ppl that counts from 1)
  var active_index = 0;
  var prev_index;
  loadImages(); //Inst loading of images/cache
  $('.bxslider').bxSlider({
    mode: "fade",
    preventDefaultSwipeY: true,
    pager: false,
    controls: false,
    auto: true,
    speed: 3000, // Speed of the transition
    pause: 4500 //The amount of time (in ms) between each auto transition

  });
  function loadImages() {
    $.each(images, function(index, image) {
      var imageDom = "<li><img src='"+image+"'/></li>";
      $(".bxslider").append(imageDom);
    })
    //$(".background .image[data-id='"+active_index+"']").addClass("active");
    //cycleImage();
  };

});
