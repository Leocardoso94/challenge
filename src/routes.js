const fields = require('./data/fields.json');

const sendFields = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(fields), 'utf-8');
};

const sendHtml = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>hi</h1>', 'utf-8');
};

const send404 = (res) => {
  res.statusCode = 404;
  res.end('NOT FOUND');
};

const relationUrlMethod = {
  '/': sendHtml,
  '/fields': sendFields,
};

module.exports = (req, res) => {
  const method = relationUrlMethod[req.url];

  method ? method(req, res) : send404(res);
};
