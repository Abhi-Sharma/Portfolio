(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  const skillLevels = document.querySelectorAll('.skill-level');
  console.log('Skill levels:', skillLevels); // Check if elements are found
  skillLevels.forEach(skillLevel => {
    const level = skillLevel.dataset.level;
    console.log('Level:', level); // Check the data-level value
    skillLevel.style.width = level;
  });
});