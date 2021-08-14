import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = process.env.PORT ?? 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nest Minimal')
    .setDescription('The Nest Minimal Api')
    .setVersion('1.0')
    .addTag('minimal')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (ctrlKey: string, methodKey: string) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`HTTP app is listening on port ${port}`);
}

bootstrap();
