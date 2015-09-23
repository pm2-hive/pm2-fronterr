var pmx = require('pmx');
var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');

pmx.initModule({

  widget : {

	  logo : 'https://mdn.mozillademos.org/files/3563/HTML5_Logo_128.png',

    theme : ['#262E35', '#1B2228', '#807C7C', '#807C7C'],

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
  //Generate the script to use conf ip:port
  fs.readFile('./public/templateScript.js', 'utf-8', function(err, data) {
    if (err) throw err;
    data = data.replace("##IP##", conf.ip);
    data = data.replace("##PORT##", conf.port);
    if (conf.ajax !== 'true')
      data = data.split("$(document)")[0];
    fs.writeFile('./public/script.js', data, 'utf-8', function(err) {
      if (err) throw err;
      console.log('script generated');
    })
  });
  app.use(cors());
  app.use(express.static('public'));
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
