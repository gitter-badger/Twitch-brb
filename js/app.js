angular.module('brb', ['brb.services', 'brb.directive'])
/*
                    TODO-s:
TODO: IF is tie: coin flip image and select a random winner?
TODO: Fix responciveness of whole app. The "brb" & top of page especially.
TODO: Cleen up HTML & CSS.. Alot of jibberish shit there
TODO: Animations & change quiz question when quiz is answered
TODO: Add countdown on current question
TODO: Add Placeholder "leader" So that leader box is not empty on start
TODO: Start creating the chat_bot
  TODO: Server & Serverside code for the bot & client.

FIXME: Some parts of the code is somewhat not scale-able (For other streamers to start using is on the fly)
FIXME: The HACK of timeout after ng-repeat event is called.
*/

.controller("mainController", ['$scope','Constants','Server', function($scope, Constants, Server) {
  $scope.server = Server.all(); //Global scope for access of data in html
  $scope.top_players = Server.top_players();
  console.log($scope.top_players);
  var images =  Constants.background_images;
  var total_images = Object.keys(images).length -1; //-1 because images start at "1.jpg" (For non tech-savy ppl that counts from 1)
  loadImages(); //Inst loading of images/cache
  $('.bxslider').bxSlider({
    mode: "fade",
    preventDefaultSwipeY: true,
    pager: false,
    controls: false,
    auto: true,
    speed: 5000, // Speed of the transition
    pause: 5500 //The amount of time (in ms) between each auto transition
  });

  $(document).on("repeat_done", function() { //Triggeres when an ng-repeat with the repeat-directory is finished repeating
    setEqualHeight();
    //IDEA: Animations on start? Quick & cheep way to display exmaple FIXME if you wanna use this
    $(".user").hide();
    setTimeout(function () {
      $(".user").show();
      animate($(".user"), "flipInX");
    }, 500);
  })

  $(".title").click(function() {
      //animate($(".user_image"), "flip"); // Coin flip
      animate($(".user"), "flipInX");
  })

  function animate(element, type) {
    type = type +" "+ "animated";
    //Maybe just do .animate()?
    // YOLO
    // Might Appear when dom loaded then animation fires
    $(element).addClass(type).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
         $(this).removeClass(type);
         console.log("done");
       });
  }
  function loadImages() { // Dynamically creates all the image containers for the slider (If users want to change background_images)
    $.each(images, function(index, image) {
      var imageDom = "<li><img src='"+image+"'/></li>";
      $(".bxslider").append(imageDom);
    })
  };
  function setEqualHeight() {
    var max_height = -1;
    setTimeout(function () { //TODO: Possible to do without timeout? Kinda HACK-y
      $('.answer').each(function(index, answer) {
        if($(this).height() > max_height)
          max_height = $(this).height();
      })
      $(".answer").height(max_height);
    }, 500);
  }
}])
