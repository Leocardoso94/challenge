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
    describe('Not found', () => {
      it('should response with status 404', async () => {
        const response = await request(app).get('/teste/404');
        expect(response.statusCode).toBe(404);
      });
    });
  });
});
