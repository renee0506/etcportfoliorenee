jQuery(document).ready(function($) {

      $('#myCarousel').carousel({
              interval: 5000
      });

      $('#carousel-text').html($('#slide-content-0').html());

      //Handles the carousel thumbnails
      $('[id^=carousel-selector-]').click( function(){
              var id_selector = $(this).attr("id");
              var id = id_selector.substr(id_selector.length -1);
              var id = parseInt(id);
              $('#myCarousel').carousel(id);
      });

      $('#myCarousel').on('slide.bs.carousel', function (e) {
              var id = $('.item.active').data('slide-number')+1;
              if (id === 6)
              {
                id = 0;
              }
              $('#carousel-text').html($('#slide-content-'+id).html());
      });
});
