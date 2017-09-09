$(document).ready(function(e) {
	time = window.setInterval(function(){
		go();
	},50);
	linum = $('.mainlist li').length;
	w = linum * 350;
	$('.piclist').css('width', w + 'px');
	$('.swaplist').html($('.mainlist').html());

	function go(){
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));

			if(ml==0){
				$('.swaplist').css({left: '1500px'});
				$('.mainlist').animate({left: ml - 1 + 'px'},'slow');
			}else{
				if(ml>=-2000){
					$('.mainlist').animate({left: ml - 1 + 'px'},'slow');
				}
			}
		}
	}


	$('.og_next').click(function(){

		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));

			if(ml==0){
				$('.swaplist').css({left: '1500px'});
				$('.mainlist').animate({left: ml - 100 + 'px'},'slow');
			}else{
				if(ml>=-2000){
					$('.mainlist').animate({left: ml - 100 + 'px'},'slow');
				}
			}
		}
	})

	$('.og_prev').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));

			if(ml<=0){	
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 100 + 'px'},'slow');				
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

