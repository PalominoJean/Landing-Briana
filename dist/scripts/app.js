var App = function() {
    this.view = {
        flag: false,
        menu: $('.content-mobile'),
        constructor: function() {
            this.toggleMenu();
            this.closeMenu();
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
        }
    }
    this.view.constructor();
}

$(document).ready(App);
