const pg = require('pg');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

const helpers = require('./lib/helpers.js');
const express = require('express');
const app = express();
console.log("running");

const connection = pg.createConnection({
  host: ENV['DB_HOST'],
  user: ENV['DB_USER'],
  password: ENV['DB_PASS'],
  database: ENV['DB_NAME'],
});

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use('src');

// Listen to POST requests to /.
app.post('/', function(req, res) {
  console.log('hello');
  // Get sent data.
  const user = req.body;
  // Do a MySQL query.
  helpers.insertIntoUsers(user);
  res.end('Success');
});

app.get('/puzzle', function(req, res) {
  res.render('puzzle');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
})
  .listen(3000, '0.0.0.0', function(err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });

