jQuery.fn.topLink = function(settings) {
	settings = jQuery.extend({
		min: 1,
		fadeSpeed: 200
	}, settings);
	return this.each(function() {
		//listen for scroll
		var el = $(this);
		el.hide();
		$(window).scroll(function() {
			if($(window).scrollTop() >= settings.min){
				el.fadeIn(settings.fadeSpeed);
			}else{
				el.fadeOut(settings.fadeSpeed);
			}
		});
	});
};
