## Description

PM2 module to collect front-end error in your Keymetrics Dashboard:

* JS error reporting
* Ajax error reporting (with JQuery) - enabled by default

To disable the ajax error reporting, go in the module config and set ajax to false.

# pm2-fronterr

## Install

```bash
$ npm install pm2 -g

$ pm2 install pm2-fronterr
```

This will generate a minified script according to your settings.
It will be served by a small express server at the port you defined (4322 default).

Put the script in the webpage you want to track:

```html
<script type="text/javascript" src="http://localhost:4322/fronterr-min.js"></script>
```

Or copy-paste and insert the content of the file.

## Uninstall

```bash
$ pm2 uninstall pm2-fronterr
```

# License

MIT
