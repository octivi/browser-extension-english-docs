# Microsoft's documentation in English

Microsoft's documentation page use the prefered language from your browser settings (`Accept-Language` header), and if a document is not available in the language, it gets machine translated. Most of the time the translation makes the technical document unusable. It is much better to read technical documentation in English.

This extension changes Microsoft's documentation to English by redirecting to /en-us/ URL for domains:

* <https://azure.microsoft.com/>
* <https://azuremarketplace.microsoft.com/>
* <https://docs.microsoft.com/>

## Why Yet Another Redirect Browser Extension

This one is simple, fast and secure. It does not require access to all websites
you are browsing, only to Microsoft's documentation websites (see `manifest.json` file).

There are other solutions to this issue:

* [Automatic text translation at MSDN pages - How to turn off?](https://stackoverflow.com/questions/10933414/automatic-text-translation-at-msdn-pages-how-to-turn-off)
* [How to disable automatic translation into German?](https://social.msdn.microsoft.com/Forums/en-US/6543407d-f743-48fb-965b-b8af9f9a0cb1/howto-disable-automatic-translation-into-german)
