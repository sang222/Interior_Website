var SiteMain = (function() {
	//PARAMATER
	var size = 1;
	var button = 1;
	var button_class = "gallery-header-center-right-links-current";
	var normal_size_class = "gallery-content-center-normal";
	var full_size_class = "gallery-content-center-full";
	var $container = $('#gallery-content-center');

	$container.isotope({itemSelector : 'img'});

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

