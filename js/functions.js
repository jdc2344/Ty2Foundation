$(document).ready(function() {

	// navigation selected class
	var $pageID = $('body').attr("id");
	
	$('.nav li').each(function(){
		if( ($(this).attr("id")) == $pageID ) {
			$(this).children('a').addClass('selected');
		}
	});
	
	$('.topNav li').each(function(){
		if( ($(this).attr("id")) == $pageID ) {
			$(this).addClass('selected');
		}
	});
	
	// image slider
	$(".slider").jCarouselLite({
      btnNext: ".next",
      btnPrev: ".prev",
      visible: 6,
    	circular: true,
    	speed: 450,
    	scroll: 6
  }); 
	
	// images lightbox trigger
	$("a.popup").fancybox({
		'titleShow'		: true,
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'titlePosition' : 'over'
	});
	
	// image gallery remove br
	$('.imgGallery br').remove();
	$('<div class="clearfix"></div>').insertAfter('.imgGallery');
	

});


