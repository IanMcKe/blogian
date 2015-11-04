blogian.directive('responsiveNav', function() {
  return {
    restrict:"E",
    link: function(element, attrs) {
      angular.element(document).ready(function() {
        var menuToggle = $('#js-mobile-menu').unbind();
        $('#js-navigation-menu').removeClass("show");

        menuToggle.on('click', function(event) {
          event.preventDefault();
          $('#js-navigation-menu').slideToggle(function(){
            if($('#js-navigation-menu').is(':hidden')) {
              $('#js-navigation-menu').removeAttr('style');
            }
          });
        });
      });
    }
  }
});
