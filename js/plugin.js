$(document).ready(function () {

    // show code opton color  picker on click
    $('.gear-cheak').click(function () {

        $('.color-option').toggle();

    });

    //Change  Theme  Color  On  Click
    var colorli = $(".color-option ul li")

    colorli
        .eq(0).css("background", "#E41B17").end()
        .eq(1).css("background", "purple").end()
        .eq(2).css("background", "#0895D1").end()
        .eq(3).css("background", "green");

    colorli.click(function () {
        $("link[href*='theme']").attr('href', $(this).attr("data-value"));
        // console.log($(this).attr("data-value"))
    });

    //scroll top

    var scroolbottoun = $("#scroll-top");

    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        $(this).scrollTop() >= 300 ? scroolbottoun.show() : scroolbottoun.hide();
    });

    scroolbottoun.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

})