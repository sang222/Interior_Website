/*
$(window).load(function () {

    var size = 1;
    var button = 1;
    var button_class = "active";
    var normal_size_class = "list";
    var full_size_class = "grid";
    var $container = $('#gallery-content-center');
    var $itemwidth = $('.product-item-grid').width();
    console.log($itemwidth);
    $container.isotope({
        itemSelector : '.product-item-grid, .product-item-list'
    });


    function check_button(){
        $('.button').removeClass(button_class);
        if(button==1){
            $("#filter-sofa").addClass(button_class);
            //$("#gallery-header-center-left-title").html('All Galleries');
        }
        if(button==2){
            $("#filter-chair").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Studio Gallery');
        }
        if(button==3){
            $("#filter-table").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Landscape Gallery');
        }
        if(button==4){
            $("#filter-tivi").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Landscape Gallery');
        }
        if(button==5){
            $("#filter-shoes").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Landscape Gallery');
        }
        if(button==6){
            $("#filter-grid").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Landscape Gallery');
        }
        if(button==7){
            $("#filter-list").addClass(button_class);
            //$("#gallery-header-center-left-title").html('Landscape Gallery');
        }
    }

    function check_size(){
        $("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
        if(size==0){
            $("#gallery-content-center").addClass(normal_size_class);
            //$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
        }
        if(size==1){
            $("#gallery-content-center").addClass(full_size_class);
            //$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
        }
        $container.isotope({itemSelector : '.product-item-grid, .product-item-list'});
    }



    $("#filter-sofa").click(function() { $container.isotope({ filter: '.sofa-filter-grid' }); button = 1; check_button(); });
    $("#filter-chair").click(function() {  $container.isotope({ filter: '.chair-filter-grid' }); button = 2; check_button();  });
    $("#filter-table").click(function() {  $container.isotope({ filter: '.table-filter-grid' }); button = 3; check_button();  });
    $("#filter-tivi").click(function() {  $container.isotope({ filter: '.tivi-filter-grid' }); button = 4; check_button();  });
    $("#filter-shoes").click(function() {  $container.isotope({ filter: '.shoes-filter-grid' }); button = 5; check_button();  });
    $("#filter-grid").click(function() {  $container.isotope({ filter: '.gird-filter' }); button = 6; check_button();  });
    $("#filter-list").click(function() {  $container.isotope({ filter: '.list-filter' }); button = 6; check_button();  });
    /!* check list and grid *!/
    $("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


    check_button();
    check_size();
});*/
