
$(document).ready(function () {


    // $("#loader").css("display", "none")
    const loader = setTimeout(() =>
        $("#loader").fadeOut()
        , 1000)


    // $("#popup").delay(3000).css("opacity", 1);
    const popUp = setTimeout(() =>
        $("#popup").animate({ opacity: 1 }, 2000).delay(3000).fadeOut(),
        $("#dim").animate({ opacity: 1 }, 2000).delay(3000).fadeOut(),
        $("#highlight").animate({ opacity: 1 }, "slow").delay(4000).fadeOut()
        , 2000);

    const popUp2 = setTimeout(() =>
        $("#popup2").animate({ opacity: 1 }).delay(1000).fadeOut()
        , 6000);
    $("#arrow").delay(7000).animate({ opacity: 1 })
});

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}