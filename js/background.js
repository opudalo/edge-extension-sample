var cors = "access-control-allow-origin";

if (browser)
  browser.webRequest.onHeadersReceived.addListener(
    function(details) {
      var responseHeaders = details.responseHeaders;
      if (responseHeaders) {
        return {
          responseHeaders: responseHeaders.filter(
            // Will work if CORS header is filtered out
            // header => header.name.toLowerCase() !== cors

            // Will be broken if CORS header will be kept
            header => !!header
          )
        };
      }
      return;
    },
    {
      urls: ["<all_urls>"]
    },
    ["blocking", "responseHeaders"]
  );
