

$(document).ready(function() {
	$('.nav > li > ul').hide()
	
	$('.nav > li').toggle(function(){
		$(this).find('ul').slideDown();
	}, function(){
		$(this).find('ul').slideUp();
	});
});
