document.addEventListener('keydown', (event) => {
    // Gets video player element
    let videoElement;

    if (window.location.href.substring(0, 22) == "https://www.amazon.com") {
        videoElement = document.getElementById('dv-web-player');
    } else {
        videoElement = document.querySelector('video');
    }

    // Encodes a new keyboard event, mimicking a right-arrow key event
    const rightArrowEvent = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39, // right arrow keycode
        which: 39,
        bubbles: true,
        cancelable: true
    });
    
    // Encodes a new keyboard event, mimicking a left-arrow key event
    const leftArrowEvent = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37, // left arrow keycode
        which: 37,
        bubbles: true,
        cancelable: true
    });

    // Switch control for inputs
    switch (event.key) {
        case ('l' || 'L'):
            // Prevent default event
            event.preventDefault();

            if (videoElement) {
                // Dispatch the event if the video element exists

                // HBO Max is so special and wants to be different
                if (window.location.href.substring(0, 20) == "https://play.max.com") {
                    document.querySelector('[data-testid="player-ux-skip-forward-button"]').click();
                } else {
                    videoElement.dispatchEvent(rightArrowEvent);
                }

            }
            break;
        case ('j' || 'J'):
            // Prevent default event
            event.preventDefault();
        
            if (videoElement) {
                // Dispatch the event if the video element exists

                // HBO Max is so special and wants to be different
                if (window.location.href.substring(0, 20) == "https://play.max.com") {
                    document.querySelector('[data-testid="player-ux-skip-back-button"]').click();
                } else {
                    videoElement.dispatchEvent(leftArrowEvent);
                }
            }
            break;
    }
});