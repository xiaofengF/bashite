$(document).ready(function(e) {
	time = window.setInterval(function(){
		$('.og_next').click();	
	},7500);
	linum = $('.mainlist li').length;
	w = linum * 350;
	$('.piclist').css('width', w + 'px');
	$('.swaplist').html($('.mainlist').html());

	$('.og_next').click(function(){

		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>3){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));

			if(ml==0){
				$('.swaplist').css({left: '1500px'});
				$('.mainlist').animate({left: ml - 500 + 'px'},'slow');
			}else{
				if(ml==-2000){
					$('.mainlist').animate({left: ml + 2000 + 'px'},'slow');
				}else{
					$('.mainlist').animate({left: ml - 500 + 'px'},'slow');
				}
			}
		}
	})

	$('.og_prev').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>3){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));

			if(ml<=0 && ml>w*-1){	
				if(ml==0){
					
				}else{
					$('.swaplist').css({left: w * -1 + 'px'});
					$('.mainlist').animate({left: ml + 500 + 'px'},'slow');				
				}
			}
		}
	})    
});

$(document).ready(function(){
	$('.og_prev,.og_next').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

})

