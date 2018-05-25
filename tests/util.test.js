const util = require('../src/utils');
const fields = require('./../src/data/fields.json');

describe('util', () => {
  describe('getFileContent', () => {
    it('should behave...', async () => {
      const content = await util.getFileContent('src/data/fields.json');
      const json = JSON.parse(content.toString());
      expect(json).toEqual(fields);
    });
  });
});
