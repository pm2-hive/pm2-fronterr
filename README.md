## Description

PM2 module to collect front-end error in your Keymetrics Dashboard:

* JS error
* Ajax error (with JQuery)

# pm2-fronterr

## Install

```bash
$ npm install pm2 -g

$ pm2 install pm2-fronterr
```

Put the following script in the webpage you want to track:

```html
<script type="text/javascript" src="http://localhost:4444/script.js"></script>
```

Or copy-paste and minify the script.js file.

## Uninstall

```bash
$ pm2 uninstall pm2-fronterr
```

# License

MIT
