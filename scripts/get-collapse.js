var isOpen = true
var isTimelines

function timelineBtn() {
    if (document.getElementById("collapse").getAttribute("aria-expanded")) { /*pass*/ } 
    else { $(".collapse").collapse("show"); isOpen = !isOpen}
    if (isTimelines) {
        $(".collapse").collapse("hide")
    }
    document.getElementById("unit-subsections").style.display = "none"
    document.getElementById("timelines-container").style.display = "block"
    isTimelines = true
}

function subsectionsBtn() {
    if (document.getElementById("collapse").getAttribute("aria-expanded")) { /*pass*/ } 
    else { $(".collapse").collapse("show"); isOpen = !isOpen}
    if (!isTimelines) { $(".collapse").collapse("hide") }
    document.getElementById("unit-subsections").style.display = "block"
    document.getElementById("timelines-container").style.display = "none"
    isTimelines = false
}