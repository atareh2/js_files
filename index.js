$('#pagepiling').pagepiling({verticalCentered:false,css3:false,sectionsColor:['white','white','white','black'],onLeave:function(index,nextIndex,direction){$('.section').eq(index-1).find('h1, p').fadeOut(600,'easeInQuart');$('.section').eq(nextIndex-1).find('h1, p').fadeIn(800,'easeInQuart');if(nextIndex==4){$('#arrow').hide();$('#pp-nav').fadeOut();$('#section4').find('.content').animate({top:'0%'},700,'easeInQuart');}if(index==4){$('#arrow').show();$('#pp-nav').fadeIn();$('#section4 .content').animate({top:'100%'},700,'easeInQuart');}},});$('#arrow').click(function(){$.fn.pagepiling.moveSectionDown();});

