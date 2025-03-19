document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case ('l' || 'L'):
            // Prevent default event
            event.preventDefault();
        
            // Gets video player
            const videoElement = document.querySelector('video');
        
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
            
                console.log('L key pressed, dispatching right arrow event');
                // And then we dispatch the event to the page
                videoElement.dispatchEvent(rightArrowEvent);
            }
            break;
        case ('j' || 'J'):
            break;
        case ('i' || 'I'):
            break;
        case ('k' || 'K'):
            break;
    }
});