const request = require('supertest');
const app = require('../src/app');

describe('app', () => {
  describe('routes', () => {
    describe('"/"', () => {
      it('should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
