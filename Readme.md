BilboJS - One remote to rule them all
=====================================

A generic controller for HTML5 presentations in browser.

Usage
-----
Create or update the `config.json` file, add your files, and run `coffee bilbo`.
### configuration file
- __framework__ - the framework you wanna use (reveal or impress)
- __markup__ - the file for the data of the presentation.
- __style__ - the additional stylesheet for the presentation (optional)
- __init__ - a file to init and configure the presentation
- __key__ - a private key to access to the remote (optional)

Need inspiration?
-----------------
Look at `config-base.json`, `config-reveal.json` or `config-impress.json`.

Routes
------
- __/__ - The presentation
- __/info__ - The ip to connect for each users who wants to see the presentation
- __/remote__ - The remote

Suported yet
------------

### frameworks
- ImpressJS
- RevealJS

### markup
- jade
- html
- markdown