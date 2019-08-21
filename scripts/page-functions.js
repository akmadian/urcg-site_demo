$(document).ready(function(){
    $(".facts-carousel").slick({
        autoplay: true,
        accessibility: true,
        autoplaySpeed: 4000
    });
});

$(document).ready(function(){
    $(".testimonials-carousel").slick({
        autoplay: true,
        accessibility: true,
        fade: true,
        autoplaySpeed: 4500
    });
});

function GASendEvent(eventLabel) {
    console.log("Sending event hit...")
    ga("send", {
        hitType: "event",
        eventLabel: eventLabel
    })
}
