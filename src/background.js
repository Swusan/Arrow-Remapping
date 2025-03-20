// Background task to add listner used by content script
chrome.runtime.onStartup.addListener(() => {
    console.log("Listener sucessfully installed!");
});