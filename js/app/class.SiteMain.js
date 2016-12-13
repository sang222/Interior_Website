var SiteMain = (function() {
	//PARAMATER


	//INIT
	function init(){
		//clsHomepage.init();
	}



	$(document).ready(function() {


		$('.bxslider-details').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			control: false

		});

		$('.remove').click(function (event) {
			event.preventDefault();
			$(this).parents('.line-bottom').addClass('wow animated slideOutUp hidden-animation');
		});

		new WOW().init();

		var containerEl = document.querySelector('[data-ref~="filter-container"]');

		var mixer = mixitup(containerEl, {
			selectors: {
				target: '[data-ref~="filter-item"]'
			},
			"animation": {
			"duration": 700,
			"nudge": true,
			"reverseOut": true,
			"effects": "fade scale(0.01) translateZ(-100px)"
		}
		});

	});

	//FUNCTION

	//RETURN
	return {
		init:init
	}
})();

$(document).ready( function() {
	SiteMain.init();
});

