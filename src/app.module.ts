import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './task/tasks.module'; // Importante

@Module({
  imports: [
    PrismaModule, 
    TasksModule, // Asegúrate de que esta línea exista
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
