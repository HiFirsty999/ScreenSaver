alert("Click/Tap anywhere to get full screen!")

let Bool = true;

document.addEventListener("click", function() {
    if (Bool) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    };

    Bool = !Bool;
});