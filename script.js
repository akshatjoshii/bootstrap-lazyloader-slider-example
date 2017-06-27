/**
 * Created by Akshat on 27-06-2017.
 */
(function () {
    $(function() {
        return $(".carousel.lazy").on("slide.bs.carousel", function(ev) {
            var lazy;
            lazy = $(ev.relatedTarget).find("img[data-src]");
            lazy.attr("src", lazy.data('src'));
            lazy.removeAttr("data-src");
        });
    });
})();