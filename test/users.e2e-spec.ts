import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../Samandar/nest-one/src/app.module';
import * as request from 'supertest';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'adminka3@gmail.com',
        login: '12345',
      });
    token = response.body.token;
    console.log(token);
  });
  it('/users (GET) --> 200 OK', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content_Type', '/json/')
      .expect(200);
  });

  it('/users (GET) --> 401 "Unauthorization" error', () => {
    return (
      request(app.getHttpServer())
        .get('/users')
        //  .set('Authorization', `Bearer ${token}`)
        .expect('Content_Type', '/json/')
        .expect(401)
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
