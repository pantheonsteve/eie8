/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.eie8 = {
    attach: function(context, settings) {
      var position = $(window).scrollTop();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });

      $(".lifelong-learning").hover(
        function () {
          $(".layer", $(this)).hide();
          $(".more-info", $(this)).show();
        }, function () {
          $(".layer", $(this)).show();
          $(".more-info", $(this)).hide();
        }
      );
    }
  };

})(jQuery, Drupal);
