		/*
			slider：实现对滑动控件属性的设置、事件的监听、以及设置回调函数。监听input事件时，对进度条进行填充。
		*/
		$.fn.RangeSlider = function(cfg){
			this.sliderCfg = {
				min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, 
				max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
				step: cfg && Number(cfg.step) ? cfg.step : 1,
				callback: cfg && cfg.callback ? cfg.callback : null
			};

			var $input = $(this);
			var min = this.sliderCfg.min;
			var max = this.sliderCfg.max;
			var step = this.sliderCfg.step;
			var callback = this.sliderCfg.callback;

			$input.attr('min', min)
				.attr('max', max)
				.attr('step', step);

			$input.bind("input", function(e){
				$input.attr('value', this.value);
				$input.css( 'background-size', this.value + '% 100%' ); 

				if ($.isFunction(callback)) {
					callback(this);
				}
			});
		};







