alert("Click/Tap anywhere to toggle full screen!")
alert("You will see the color changing screen as a screen saver because the website is on developing, so don't be confused!")

let Bool = true;

document.addEventListener("click", function() {
    if (Bool) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    };

    Bool = !Bool;
});
