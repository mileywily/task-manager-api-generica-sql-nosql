import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../prisma/prisma.service'; // Asegúrate de tenerlo
import { PrismaGenericRepository } from '../common/repositories/prisma-generic.repository';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    PrismaService,
    {
      provide: 'TASKS_REPOSITORY',
      // Aquí podrías usar un Factory para elegir entre SQL/NoSQL según .env
      useFactory: (prisma: PrismaService) => {
        return new PrismaGenericRepository<any>(prisma.task); // 'task' es el modelo en schema.prisma
      },
      inject: [PrismaService],
    },
  ],
})
export class TasksModule {}