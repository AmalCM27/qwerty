$(document).ready(function(){
  $('.slide__link').on('click', function(e){
    e.preventDefault();
    console.log('Slide show prew On click! \n');
  
    var $this = $(this),
        item = $this.closest('.slide__item'),
        wrap = $this.closest('.slideShow'),
        gap = wrap.find('.slide__gap'),
        itemPath = $this.find('img').attr('src'),
        dur = 500;
  
    if(!item.hasClass('activSl')){
      item.addClass('.activSl').siblings().removeClass('activSl');
      gap.find('img').fadeOut(dur, function(){
        $(this).attr('src', itemPath).fadeIn(dur);
      });
    }			
  
  });
  });