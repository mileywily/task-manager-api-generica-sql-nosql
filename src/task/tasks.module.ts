import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaGenericRepository } from '../common/repositories/prisma-generic.repository';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    // Registramos PrismaService para que esté disponible en el Factory
    PrismaService, 
    {
      provide: 'TASKS_REPOSITORY',
      // Factory: Instanciamos el repositorio genérico pasando el modelo de la tabla 'task'
      useFactory: (prisma: PrismaService) => {
        return new PrismaGenericRepository<any>(prisma.task);
      },
      inject: [PrismaService],
    },
  ],
})
export class TasksModule {}