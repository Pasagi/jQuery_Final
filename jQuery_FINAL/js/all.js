$(document).ready(function(){
    
    //下拉式選單
    $('.dropdown').click(function(event){
        event.preventDefault();
        $(this).siblings().slideToggle();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').hide();
    });
    
    // lightbox 效果
    lightbox.option({
        'resizeFuration':200,
        'wrapAround': true
    });

    // 置頂效果
    $('.gotop a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    // Swiper 效果
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

    /* 
    $('.dropdown-product').click(function(event){
        event.preventDefault();
        $('.dropdown-open-product').slideToggle();
        $(this).toggleClass('active')
        $(this).parent().siblings().find('a').removeClass('active');
    });
    
    $('.dropdown-contact').click(function(event){
        event.preventDefault();
        $('.dropdown-open-contact').slideToggle();
        $(this).toggleClass('active')
        $(this).parent().siblings().find('a').removeClass('active');
    });
    */
});