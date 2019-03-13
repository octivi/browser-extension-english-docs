// Copyright (C) 2019  Marcin Engelmann <mengelmann@octivi.com>

// Language codes from https://docs.microsoft.com/en-us/locale/
var languages = /\/(es-mx|fr-ca|nl-nl|pt-br|bs-cyrl-ba|bs-latn-ba|ca-es|cs-cz|da-dk|de-AT|de-CH|de-de|et-ee|es-es|eu-es|fr-BE|fr-CH|fr-fr|gl-es|hr-hr|is-is|it-CH|it-it|lv-lv|lt-lt|hu-hu|nl-BE|nl-nl|nb-NO|pl-pl|pt-pt|ro-ro|sk-sk|sl-si|sr-latn-rs|fi-fi|sv-se|tr-tr|el-gr|bg-bg|ru-ru|sr-cyrl-rs|uk-ua|he-il|ar-sa|id-id|ms-my|vi-vn|kk-kz|ru-ru|hi-in|th-th|ko-kr|zh-tw|zh-CN|zh-hk|ja-jp)/i;

chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    const url = new URL(details.url);
    if (languages.test(url.pathname)) {
      url.pathname = url.pathname.replace(languages, '/en-us');
      chrome.tabs.update(details.tabId, {url: url.href});
    }
  },
  {
    url: [
      { hostEquals: 'azure.microsoft.com' },
      { hostEquals: 'azuremarketplace.microsoft.com' },
      { hostEquals: 'docs.microsoft.com' },
    ]
  }
);
