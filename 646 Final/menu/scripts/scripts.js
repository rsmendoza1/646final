

$(document).ready(function(){
	$('#tabCopy p:not(:first)').hide();
	
	$('#menuNav li').click(function(e) {
		$('#tabCopy p').hide();
		$('#menuNav .current').removeClass("current");
		$(this).addClass('current');
		
		var clicked=$(this).find('a:first').attr('href');
		$('#tabCopy ' + clicked).fadeIn('fast');
		e.preventDefault();
	}).eq(0).addClass('current');
});



