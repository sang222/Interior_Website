var SiteMain = (function() {
	//PARAMATER
	var size = 1;
	var button = 1;
	var button_class = "active";
	var list = "list";
	var grid = "grid";
	var $container = $('#product-items');

	$container.isotope({itemSelector : 'div'});

	//INIT
	function init(){
		//clsHomepage.init();
		initEvents();
		check_button();
		check_type();
	}

	function initEvents(){
		$("#filter-sofa").click(function() { $container.isotope({ filter: '.sofa-filter' }); button = 1; check_button(); });
		$("#filter-chair").click(function() {  $container.isotope({ filter: '.chair-filter' }); button = 2; check_button();  });
		$("#filter-table").click(function() {  $container.isotope({ filter: '.table-filter' }); button = 3; check_button();  });
		$("#filter-tivi").click(function() {  $container.isotope({ filter: '.tivi-filter' }); button = 4; check_button();  });
		$("#filter-shoes").click(function() {  $container.isotope({ filter: '.shoes-filter' }); button = 5; check_button();  });
	}

	function check_button(){
		$('.active').removeClass(button_class);
		if(button==1){
			$("#filter-sofa").addClass(button_class);
		}
		if(button==2){
			$("#filter-chair").addClass(button_class);
		}
		if(button==3){
			$("#filter-table").addClass(button_class);
		}
		if(button==4){
			$("#filter-tivi").addClass(button_class);
		}
		if(button==5){
			$("#filter-shoes").addClass(button_class);
		}
	}

	function check_type(){
		$("#product-items").removeClass(list).removeClass(grid);
		if(size==0){
			$("#product-items").addClass(list);
		}
		if(size==1){
			$("#product-items").addClass(grid);
		}
		$container.isotope({itemSelector : 'div'});
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

