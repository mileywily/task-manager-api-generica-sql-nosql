import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Permite usar PrismaService en toda la app sin importarlo repetidamente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}