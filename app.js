var pmx = require('pmx');
var express = require('express');
var app = express();
var cors = require('cors');

pmx.initModule({

  widget : {

	  logo : 'https://mdn.mozillademos.org/files/3563/HTML5_Logo_128.png',

    theme : ['#111111', '#1B2228', '#807C7C', '#807C7C'],

    el : {
      probes  : true,
      actions : true
    },

    block : {
      actions : false,
      issues  : true,
      meta    : true,

      main_probes : []
    }

  }

}, function(err, conf) {
  app.use(cors());
  app.get('/', function(req, res) {
    res.send('pm2-fronterr module running');
  });
  app.post('/', function(req, res) {
    var query = req.query
    if (typeof(query.msg) !== 'undefined')
      var err = new Error(query.msg + ' at ' + query.filename + ' line ' + query.lineno);
    else
      var err = new Error('Ajax issue ' + query.status + ': ' + query.result);
    pmx.notify(err);
    res.send('error reported');
  });
  app.listen(conf.port);
});
