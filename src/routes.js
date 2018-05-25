const fields = require('./data/fields.json');
const path = require('path');
const { getFileContent, getContentType, getFilePath } = require('./utils');


const sendFields = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(fields), 'utf-8');
};

const send404 = (res) => {
  res.statusCode = 404;
  res.end('NOT FOUND');
};

const serveStaticContent = async (req, res) => {
  try {
    const filePath = getFilePath(req.url);

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = getContentType(extname);

    const content = await getFileContent(filePath);

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') console.log(error);
    send404(res);
  }
};

module.exports = (req, res) => {
  if (req.url === '/api/fields') sendFields(req, res);

  serveStaticContent(req, res);
};
