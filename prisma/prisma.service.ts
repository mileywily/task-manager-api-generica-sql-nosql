import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Conecta a la base de datos al iniciar el módulo
    await this.$connect();
  }

  async onModuleDestroy() {
    // Cierra la conexión de forma segura al apagar la app
    await this.$disconnect();
  }
}