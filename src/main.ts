import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Pipes Globales siguiendo estándares de seguridad
  app.useGlobalPipes(
    new ValidationPipe({
      // 1. Remueve propiedades que no estén en el DTO (Evita inyección de campos)
      whitelist: true, 
      
      // 2. Lanza un error 400 si se envían propiedades no permitidas
      forbidNonWhitelisted: true, 
      
      // 3. Transforma automáticamente los payloads a objetos con tipo (DTO instances)
      transform: true, 
    }),
  );

  // Prefijo global opcional para versionamiento de API
  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();