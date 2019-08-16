$(document).ready(function(){
    $('.facts-carousel').slick({
        autoplay: true,
        accessibility: true,
        dots: true
    });
});

function GASendEvent(eventLabel) {
    console.log('Sending event hit...')
    ga('send', {
        hitType: 'event',
        eventLabel: eventLabel
    })
}