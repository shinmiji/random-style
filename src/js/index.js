(function(global, $, undefined){
	'use strict';

	var $panel = $('.panel');
	var number = 0;
	var action = null;

	$('.start').on('click', function(){
		randomStyleNumber();
	});

	$('.stop').on('click', function(){
		clearInterval(action);
	});

	function randomStyleNumber() {
		
		action = setInterval(function(){

			var $insertNumber = $('<span>'+number+'</span>');
			var color = "#" + (parseInt(Math.random() * 0xffffff)).toString(16);
			var fontSize = parseInt(Math.random()*40)+'px';
			
			$insertNumber.css({
				'color': color,
				'fontSize': fontSize,
				'display': 'inline-block'
			});

			$panel.append($insertNumber);
			number++;

		}, 100);

		 this.window.scrollTo(0, window.document.body.scrollHeight);

	};

})(window, window.jQuery);

