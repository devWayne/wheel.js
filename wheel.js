(function() {

	$.fn.wheel = function(opts) {
		return this.each(function() {
			var $wheel = $(this),
				$pointer = $(this).next(),
				options = $.extend(options, opts, $.fn.wheel.defaults);
			$wheel.parent().css('position', 'relative');
			centershow($pointer);
		})
	}


	function centershow(divName) {
		var container = $(divName).prev();
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


	$.fn.rotate = function(final_deg, callback) {
		return this.each(function(){		
		var acc = 1,
			acc_flag = true;
		if (final_deg < 180) {
			final_deg = final_deg + 360;
		}
		var deg = final_deg,
			_this = $(this);
		timefunc = setInterval(function() {

			if (deg < final_deg * 50 && acc_flag) {
				acc++;
				deg = deg + acc;
			} else {
				acc_flag = false;
				deg = deg - acc;
				acc--;

				if (acc == 1 && deg == final_deg && !acc_flag) {
					clearInterval(timefunc);
					if (callback && (callback instanceof Function)) {
						callback();
					}
				}
			}
			_this.css('-webkit-transform', 'rotate(' + deg + 'deg)')
		}, 20);
		})
	}


})(jQuery)