/*START TYPED JS
<script>
    var typed = new Typed('#typed', {
        strings : ['HELLO EVERYONE'],
        typeSpeed: 200,
        backSpeed: 100,
        fadeOut: true,
        loop: false,
        showCursor: false,
    });
    var typed1 = new Typed('#typed1', {
    strings : ['WEB DEVELOPER', 'and', 'GRAPHIC DESIGNER'],
    typeSpeed: 200,
    backSpeed: 100,
    fadeOut: true,
    loop: true,
    showCursor: false,
});


</script> 

//END TYPED Js

//Start Script Navbar-->
    <script>
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $('.fixed-top').css('background', '#000000ba');
        } else {
            $('.fixed-top').css('background', '#000000ba');
        }
    }); 
</script> 

//End Script Navbar-- >



//Nav link-- >

<script >
    $(document).on('click', 'ul li', function () {
        $(this).addClass('active').siblings().removeClass('active')
    }); 
</script>

//SWIPER-- >

<script>
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 100,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    }); 
</script>

