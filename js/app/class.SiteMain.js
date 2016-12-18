var SiteMain = (function() {
	//PARAMATER


	//INIT
	function init(){
		//clsHomepage.init();
		filterProduct();
	}

	function filterProduct() {
		$('#filter-type ul li').on('click', function () {
			var type = $(this).attr('data-type');
			$('.filter-container').attr('data-type', type);
			if(type == "list-filter"){

				$('.filter-container .product-item').removeClass('col-md-3').addClass('col-md-6');
			}else{
				$('.filter-container .product-item').removeClass('col-md-6').addClass('col-md-3');
			}
		});
	}


	$(document).ready(function() {


		$('.bxslider-details').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			control: false

		});

		$('.remove').click(function (event) {
			event.preventDefault();
			$(this).parents('.line-bottom').remove();
		});

		new WOW().init();

		var containerEl = document.querySelector('[data-ref~="filter-container"]');

		var mixer = mixitup(containerEl, {
			selectors: {
				target: '[data-ref~="filter-item"]'
			},
            multifilter: {
                enable: true // enable the multifilter extension for the mixer
            },
			"animation": {
			"duration": 700,
			"effects": "fade scale(0.03) translateZ(-100px)"
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

