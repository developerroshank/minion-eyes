/**
 * Slecting the eye div
 */

let eye_ref = document.querySelectorAll(".eye");

/**
 * mousemove for devices with mouse
 * touchmove for touchscreen devices
 */

let events = ["mousemove", "touchmouse"]


/**
 * Check for touchscreen
 */

function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Same Function for both events
 */

events.forEach((eventType) => {
    document.body.addEventListener(eventType,
        (event) => {
            eye_ref.forEach((eye) => {
                /**
                 * getBoundingClientRect() method
                 * returns the position relative to the viewport
                 */

                let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

                console.log(eyeX, eyeY);

                /**
                 * ClientX and ClientY return the position of clients
                 * cursor from top let of the screen
                 */

                var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
                var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

                console.log(x, y)

                /**
                 * Subtract x position of mouse 
                 * from x position of eye and y position of mouse 
                 * from y position of eye
                 * 
                 * Use atan2(returns angle in radians)
                 */

                let radian = Math.atan2(x - eyeX, y - eyeY);

                /**
                 * Convert Radians to Degress
                 */

                let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

                console.log(rotationDegrees)

                /**
                 * Rotate the Eye
                 */

                eye.style.transform = "rotate(" + rotationDegrees + "deg)";
            });

        });
});


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});