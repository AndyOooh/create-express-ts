import supertest from 'supertest';

import { app } from '../src/app';

describe('Controller / User', () => {
  beforeAll(async () => {
    const a = 'b';
    console.log('🚀  file: controller.user.ts:9  a', a);
  });
});

describe('GET /users', () => {
  it('should return 200 OK', () => {
    return supertest(app).get('/users').expect(200);
  });
  it('should return a non-empty array', async () => {
    const response = await supertest(app).get('/questions');
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
