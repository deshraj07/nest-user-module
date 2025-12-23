import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  });

  // Enable Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTO instances
    whitelist: true, // Strip properties not in the DTO
    forbidNonWhitelisted: true, // Throw error if extra properties are present
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

  await app.listen(process.env.PORT ?? 5005);
  console.log(`Server is running on http://localhost:${process.env.PORT ?? 5005}`);
  console.log(`Swagger is running on http://localhost:${process.env.PORT ?? 5005}/api`);
}
bootstrap();
