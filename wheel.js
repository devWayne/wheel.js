(function() {

	$.fn.wheel = function(opts) {
		return this.each(function() {
			var $wheel = $(this),
				$pointer = $(this).children(),
				options = $.extend(options, opts, $.fn.wheel.defaults);
			$wheel.css('position', 'relative');
			centershow($pointer);
		})
	}

	$.fn.wheel.defaults = {

	}

	function centershow(divName) {
		var container = $(divName).parent();
		var top = (container.height() - $(divName).height()) / 2;
		var left = (container.width() - $(divName).width()) / 2;
		var scrollTop = container.scrollTop() || 0;
		var scrollLeft = container.scrollLeft() || 0;
		$(divName).css({
			'position': 'absolute',
			'top': top + scrollTop,
			'left': left + scrollLeft
		}).show();
		//$('#_overlay_').show();
	}


	$.rotate=function(final_deg) {
		var deg = 0,
			acc = 1,
			acc_flag = true,
			deg=deg+final_deg;
			timefunc = setInterval(function() {

				if (deg < final_deg * 100 && acc_flag) {
					acc++;
					deg = deg + acc;
				} else {
					acc_flag = false;
					deg = deg - acc;
					acc--;
					
					if (acc == 1 && deg == final_deg && !acc_flag) {
						clearInterval(timefunc);
					}
				}
				$('.lotteryBtn').css('-webkit-transform', 'rotate(' + deg + 'deg)')
			}, 50);
	}

	
})(jQuery)