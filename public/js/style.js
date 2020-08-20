// for responsive navbar
(function ($) {
    $(function () {

        $('.sidenav').sidenav();

    });
})(jQuery);
$(document).ready(function () {
    $('select').formSelect();
});
$(document).ready(function () {
    $('input#input_text, textarea#Description').characterCounter();
});