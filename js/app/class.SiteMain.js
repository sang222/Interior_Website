var SiteMain = (function() {
	//PARAMATER
	
	//INIT	
	function init(){
		clsHomepage.init();
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

