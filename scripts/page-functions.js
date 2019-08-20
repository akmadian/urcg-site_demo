$(document).ready(function(){
    $(".facts-carousel").slick({
        autoplay: true,
        accessibility: true,
    });
});

$(document).ready(function(){
    $(".testimonials-carousel").slick({
        autoplay: true,
        accessibility: true,
        fade: true,
    });
});

function GASendEvent(eventLabel) {
    console.log("Sending event hit...")
    ga("send", {
        hitType: "event",
        eventLabel: eventLabel
    })
}