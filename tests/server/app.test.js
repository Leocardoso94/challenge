const request = require('supertest');
const app = require('../../src/server/app');
const fields = require('../../src/server/data/fields.json');

describe('app', () => {
  describe('routes', () => {
    describe('"/"', () => {
      it('should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
      });
    });
    describe('"/api/fields"', () => {
      const endPoint = '/api/fields';
      it('should response the GET method with the json', async () => {
        const response = await request(app).get(endPoint);
        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toBe('application/json');
        expect(response.body).toEqual(fields);
      });
    });
    describe('Not found', () => {
      it('should response with status 404', async () => {
        const response = await request(app).get('/teste/404');
        expect(response.statusCode).toBe(404);
      });
    });
    describe('static content', () => {
      it('should response the index.html', async () => {
        const response = await request(app).get('/index.html');
        expect(response.statusCode).toBe(200);
      });
      it('should response the script.js', async () => {
        const response = await request(app).get('/bundle.js');
        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toBe('text/javascript');
      });
    });
  });
});
