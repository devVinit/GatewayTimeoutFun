chrome.runtime.onInstalled.addListener(() => {
  chrome.webRequest.onCompleted.addListener(
    onCompleted_callback,
    { urls: ["<all_urls>"] },
    ["responseHeaders"]
  );
});


const onCompleted_callback = details => {
  if (details.statusCode === 504) {
    let audio = document.createElement('audio');
    audio.src = './server.mp3';
    audio.play();
  }
}