const util = require('../src/utils');
const fields = require('./../src/data/fields.json');

describe('util', () => {
  describe('getFileContent', () => {
    it('should get the same content of field.json', async () => {
      const content = await util.getFileContent('src/data/fields.json');
      const json = JSON.parse(content.toString());
      expect(json).toEqual(fields);
    });
  });
  describe('getContentType', () => {
    it('should return text/html when the extension is .html', async () => {
      expect(util.getContentType('.html')).toBe('text/html');
    });
    it('should return application/octet-stream when does not find the extension', () => {
      expect(util.getContentType('.test')).toBe('application/octet-stream');
    });
  });
  describe('getFilePath', () => {
    it('should return public/index.html when url is "/"', () => {
      const url = '/';
      expect(util.getFilePath(url)).toBe('public/index.html');
    });
    it('should return public/style.css when url is "/style.css"', () => {
      const url = '/style.css';
      expect(util.getFilePath(url)).toBe('public/style.css');
    });
  });
});
