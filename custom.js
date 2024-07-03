$(document).ready(function(){
  // Header active 
  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    if(sct > 50) {
      $('header,.gototop').addClass('active')
    }
    else {
      $('header,.gototop').removeClass('active')
    }
  });
  // main-text animate 
  $(".name,.publisher").lettering();
    
  // main-img effect 
  anime({
    targets:'.person .person-overlay',
    translateX: 1800,
    delay:1000,
    duration:1500,
    easing:'easeInSine'
  })
  anime({
    targets:'.person img',
    opacity: 1,
    delay:1500,
    duration:1500,
    easing:'easeInSine'
  })
  // publisher
  anime({
    targets:'.publisher',
    opacity: 1,
    duration:1500,
    easing:'easeInSine',
    delay: anime.stagger(100,{start: 3000})
  })
  // name
  anime({
    targets:'.name',
    opacity: 1,
    duration:3000,
    easing:'easeInSine',
    delay: anime.stagger(100,{start: 4500})
  })
  // name animation up and down
  anime({
    targets:'.name .char2,.name .char4,.name .char6',
    keyframes: [
      {translateY: 100, duration: 1500}
    ],
    easing: 'easeInOutExpo',
    delay: 7000
  })
  anime({
    targets:'.name .char3,.name .char5',
    keyframes: [
      {translateY: -100, duration: 1500}
    ],
    easing: 'easeInOutExpo',
    delay: 7000
  })
  //website-publishing tab
  $('.tab-wrap li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
    $('.tab-content .tab-co').removeClass('active');
    $('#'+$(this).attr('data-alt')).addClass('active')
  });
  // practical tab 
  $('.practical-tab li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
    $('.coding-content-wrap .practical-content').fadeOut();
    $('#' + $(this).attr('data-alt')).fadeIn();
  });
});
// end