function GASendEvent(eventLabel) {
    ga("send", {
        hitType: "event",
        eventLabel: eventLabel
    })
}
