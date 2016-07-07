/**
 * ========================================
 * @name    Simple Loader JS
 * @creator Badescu Theodor<theo@btheo.com>
 * @version 1.0
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * ========================================
 */ "use strict";

;(function($) {
    $.fn.siLoader = function(aCallback) {
        var t = this;

        t.each(function() {
            $(this).data("src", $(this).attr("src")).prop("src", "");
        });

        $(document).ready(function() {
            t.each(function() {

                $(this).hide().on("load", function() {
                    ( aCallback && aCallback.bind(this)() ) || $(this).show();
                });

                $(this).prop("src", $(this).data("src"));
            });
        });
    };
})(jQuery);