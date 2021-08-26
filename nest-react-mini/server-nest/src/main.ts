import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = process.env.PORT ?? 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('The Nest Minimal API')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (ctrlKey: string, methodKey: string) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Nest Minimal API',
    customCssUrl: 'http://localhost:4000/swagger.css',
    customfavIcon: 'http://localhost:4000/favicon-32x32.png',
  });

  await app.listen(port);

  console.log(`HTTP app is listening on port ${port}`);
}

bootstrap();
