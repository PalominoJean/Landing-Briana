var App = function() {
    this.view = {
        flag: false,
        menu: $('.content-mobile'),
        constructor: function() {
            this.toggleMenu();
            this.closeMenu();
            this.carousel();
        },
        toggleMenu: function() {
            var item = $('.header_menu_mobile');
            var self = this;
            item.on('click', function() {
                if (!self.flag) {
                    self.menu.addClass('openMenu');
                    self.flag = true;
                } else {
                    self.menu.removeClass('openMenu');
                    self.flag = false;
                }
            });
        },
        closeMenu: function() {
            var self = this;
            $(document).on('click', function() {
                if (self.flag) {
                    selfs.menu.removeClass('openMenu');
                    self.flag = false;
                }
            })
        },
        carousel: function() {
            $('.slider').slick();
            // $('.slider').slick({
            //     dots: true,
            //     infinite: true,
            //     speed: 800,
            //     autoplaySpeed: 4000,
            //     cssEase: 'linear',
            //     autoplay: true,
            //     arrows: false
            // });
        }
    }
    this.view.constructor();
}

$(document).ready(App);
