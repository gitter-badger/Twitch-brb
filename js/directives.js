angular.module('brb.directive', [])
.directive('repeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $(document).trigger("repeat_done");
    }
  };
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
