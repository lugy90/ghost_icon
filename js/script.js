$(function(){
	$('.link .button').hover(function(){
		var content = $(this).attr('data-title');
		$('.tip em').text(content)
		var dis = $(this).offset().left;
		var dif = ($('.tip').outerWidth() - $(this).outerWidth())/2;
		var pos = dis - dif;
		$('.tip').css({'left':pos+'px'}).animate({'top':180,'opacity':1},300);

	}, function(){
		if (!$('.tip').is(':animated')) {
		$('.tip').animate({'top':160,'opacity':0},300);	
		}
	})
})