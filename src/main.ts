import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Backend API')
    .setDescription('The NestJS Backend Template API description')
    .setVersion('1.0')
    .addTag('Users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 5005;

  // Listen on all network interfaces
  await app.listen(port, '0.0.0.0');

  console.log(`Server is running on port ${port}`);
  // Do NOT print localhost, because it won't work outside
  console.log(`Swagger is available at /api (use your Railway URL)`);
}
bootstrap();
