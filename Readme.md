BilboJS - One remote to rule them all
=====================================

A generic controller for HTML5 presentations in browser.

Prerequisites
-------------

You should have a version of NodeJS and the Coffee binary installed. Once you have cloned the repository, do a `npm install`.

How it works?
-------------

Create or update the `config.json` file, add your files, and run `coffee bilbo`.
### configuration file
- __framework__ - the framework you wanna use (reveal or impress)
- __markup__ - the file for the data of the presentation.
- __style__ - the additional stylesheet for the presentation (optional)
- __init__ - a file to init and configure the presentation
- __key__ - a private key to access to the remote (optional)

How to use?
-----------

Go to `http://localhost:4242` in your favourite browser to see presentation.

_You have to be on the same Wifi._

Routes
------

- __/__ - The presentation
- __/info__ - The ip to connect for each users who wants to see the presentation
- __/remote__ - The remote

Need inspiration?
-----------------

Look at `config-base.json`, `config-reveal.json` or `config-impress.json`.

Supported yet
------------

### frameworks
- ImpressJS
- RevealJS

### markup
- jade
- html
- markdown

Nice to have
------------

- Automatic mode (change slide for a specific interval)
- Synchro auto
- Routes ??

License 
-------

(The MIT License)

Copyright (c) 2012 Jeremie T. &lt;taboada.jeremie@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.