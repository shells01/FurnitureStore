// JavaScript code: makes dropdown menu appear on hover
// declare your variables
var toggle_element0 = $('.dropdown-content');
var activator0 = $('.dropdown')

// define your functions
$(document).ready(function () {
    toggle_element0.hide(0);

    activator0.mouseover(function () {
        toggle_element0.show(200)
    });
    activator0.mouseleave(function () {
        toggle_element0.slideUp(300)
    });
});