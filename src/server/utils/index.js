const { readFile } = require('fs');

const getContentType = (extension = '') => {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml',
  };

  return mimeTypes[extension] || 'application/octet-stream';
};


const getFileContent = filePath => new Promise((resolve, reject) => {
  readFile(filePath, (error, content) => {
    error ? reject(error) : resolve(content);
  });
});

const getFilePath = url => (url === '/' ? 'public/index.html' : `public${url}`);

module.exports = {
  getContentType,
  getFileContent,
  getFilePath,
};
