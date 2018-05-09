
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


/*
	button：实现loading属性
*/
import {Spinner} from 'spin.js';

function showSpin(){
	var spinnerOpts = {
			lines: 11 // 共有几条线组成
			, length: 13 // 每条线的长度
			, width: 8 // 每条线的长度
			, radius: 19 // 内圈的大小
			, scale: 0.5 // Scales overall size of the spinner
			, corners: 0.1 // 圆角的程度
			, color: '#000' // #rgb or #rrggbb or array of colors
			, opacity: 0.1 // Opacity of the lines
			, rotate: 18 // 整体的角度（因为是个环形的，所以角度变不变其实都差不多）
			, direction: 1 // 1: clockwise, -1: counterclockwise
			, speed: 0.8 // 速度：每秒的圈数
			, trail: 55 //  高亮尾巴的长度
			, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
			, zIndex: 2e9 // z-index的值 2e9（默认为2000000000
			, className: 'spinner' // The CSS class to assign to the spinner
			, top: '50%' // Top position relative to parent
			, left: '50%' // Left position relative to parent
			, shadow: false // 是否要阴影
			, hwaccel: false // 是否用硬件加速
			, position: 'absolute' // Element positioning
	};
	var spinTarget = $('.panel');
	new Spinner(spinnerOpts).spin(spinTarget);
}


$(function(){
	showSpin();
	
});



