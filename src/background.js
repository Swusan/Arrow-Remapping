// Background task to add listner used by content script
chrome.runtime.onInstalled.addListener(() => {
    console.log("Listener sucessfully installed!");
});