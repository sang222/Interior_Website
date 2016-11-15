var clsHomepage = (function() {
    //PARAMATER

    //INIT
    function init(){
        $('.bxslider').bxSlider({
            mode: 'vertical',
            slideMargin: 5
        });
    }

    //FUNCTION

    //RETURN
    return {
        init:init
    }
})();
$(document).ready( function() {
    SiteMain.init();
});

