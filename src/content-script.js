document.addEventListener('keydown', (event) => {
    // Gets video player element
    const videoElement = document.querySelector('video');

    switch (event.key) {
        case ('l' || 'L'):
            // Prevent default event
            event.preventDefault();

            if (videoElement) {
                // Encodes a new keyboard event, mimicking a right-arrow key event
                const rightArrowEvent = new KeyboardEvent('keydown', {
                    key: 'ArrowRight',
                    code: 'ArrowRight',
                    keyCode: 39, // right arrow keycode
                    which: 39,
                    bubbles: true,
                    cancelable: true
                });

                // And then we dispatch the event to the page
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
                // Encodes a new keyboard event, mimicking a left-arrow key event
                const leftArrowEvent = new KeyboardEvent('keydown', {
                    key: 'ArrowLeft',
                    code: 'ArrowLeft',
                    keyCode: 37, // left arrow keycode
                    which: 37,
                    bubbles: true,
                    cancelable: true
                });

                // And then we dispatch the event to the page
                if (window.location.href.substring(0, 20) == "https://play.max.com") {
                    document.querySelector('[data-testid="player-ux-skip-back-button"]').click();
                } else {
                    videoElement.dispatchEvent(leftArrowEvent);
                }
            }
            break;
    }
});