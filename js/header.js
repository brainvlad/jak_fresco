$(function() {
    const header = $('.header');
    const headerLinkActive = $('.header__link-active');

    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            header.css({
                'background': 'rgba(254,254,254,0.6)',
                'transition': '.3s',
                'backdrop-filter': 'blur(10px)',
                'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px'

            });
            headerLinkActive.css({
                'transition': '.3s',
               'padding': '15px 15px 15px 15px'
            });
        } else {
            header.css({
                'background': 'transparent',
                'backdrop-filter': 'blur(0px)',
                'transition': '.3s',
                'box-shadow': 'none'
            });
            headerLinkActive.css({
                'transition': '.3s',
                'padding': '75px 15px 15px 15px'
            });
        }
    });
});