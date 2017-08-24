
 if (browser) browser.webRequest.onHeadersReceived.addListener(
    // extendHeadersWithContentSecurityPolicies,
    function(details) {
      var responseHeaders = details.responseHeaders;

      if (responseHeaders) {
        return {
          responseHeaders: [
            {
              name: 'content-security-policy',
              value: '*'
            }
          ]
        };
      }
      return;
    },
    {
      urls: ["<all_urls>"]
    },
    ["blocking", "responseHeaders"]
  );
