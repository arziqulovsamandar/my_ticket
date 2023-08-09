import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    const port = process.env.PORT || 1;
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('My_ticket Project')
      .setDescription('Rest API')
      .setVersion('1.0.0')
      .addTag('NESTJS,Postgres,Sequielize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/dosc', app, document);

    app.listen(port, () => {
      console.log(`server ${port}-Portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
