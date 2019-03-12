chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    url.pathname = (url.pathname.replace(/^\/\w\w-\w\w\//, '/en-us/'));
    return { redirectUrl: url.href };
  },
  {
    urls: [
      "*://azure.microsoft.com/*",
      "*://docs.microsoft.com/*"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
  },
  ["blocking"]
);
