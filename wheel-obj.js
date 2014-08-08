
	var Wheel = function(options) {
			this.init(options)
		},
		proto = Wheel.prototype;

	proto.constructor = Wheel;

	proto.init = function(options) {
		var _this = this;
		var opt = $.extend({},options);
		this.outerWheel=opt.outerWheel||$('.outerWheel');
		this.innerWheel=opt.innerWheel||$('.innerWheel');
	}

	proto.centershow = function() {
		var outerWheel = this.outerWheel,
			innerWheel = this.innerWheel,
			top = (outerWheel.height() - innerWheel.height()) / 2,
			left = (outerWheel.width() - innerWheel.width()) / 2,
			scrollTop = outerWheel.scrollTop() || 0,
			scrollLeft = outerWheel.scrollLeft() || 0;
		outerWheel.parent().css('position','relative');
		innerWheel.css({
			'position': 'absolute',
			'top': top + scrollTop,
			'left': left + scrollLeft
		}).show();
	}
 	
 	proto.rotate=function(final_deg,callback){
 		var acc = 1,
				acc_flag = true;
			if (final_deg < 180) {
				final_deg = final_deg + 360;
			}
			var deg = final_deg,
				_this = this.innerWheel;
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
 	}
