const utils = require('../../src/server/utils');
const fields = require('../../src/server/data/fields.json');

describe('utils', () => {
  describe('getFileContent', () => {
    it('should get the same content of field.json', async () => {
      const content = await utils.getFileContent('src/server/data/fields.json');
      const json = JSON.parse(content.toString());
      expect(json).toEqual(fields);
    });
  });
  describe('getContentType', () => {
    it('should return text/html when the extension is .html', async () => {
      expect(utils.getContentType('.html')).toBe('text/html');
    });
    it('should return application/octet-stream when does not find the extension', () => {
      expect(utils.getContentType('.test')).toBe('application/octet-stream');
    });
  });
  describe('getFilePath', () => {
    it('should return public/index.html when url is "/"', () => {
      const url = '/';
      expect(utils.getFilePath(url)).toBe('public/index.html');
    });
    it('should return public/style.css when url is "/style.css"', () => {
      const url = '/bundle.js';
      expect(utils.getFilePath(url)).toBe('public/bundle.js');
    });
  });
});
