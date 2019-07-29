function GASendEvent(eventLabel) {
    console.log('Sending event hit...')
    ga('send', {
        hitType: 'event',
        eventLabel: eventLabel
    })
}