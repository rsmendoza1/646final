
$(function(){
	$('#slideShow img:gt(0)').hide();
	setInterval(function(){
		$('#slideShow :first-child').fadeOut(1000)
		.next('img').fadeIn(1000)
		.end().appendTo('#slideShow');}, 3000);

});
