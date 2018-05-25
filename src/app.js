const http = require('http');
const routes = require('./routes');

const onRequest = (req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  routes(req, res);
};

module.exports = http.createServer(onRequest);
