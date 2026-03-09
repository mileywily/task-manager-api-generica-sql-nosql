// src/common/repositories/prisma-generic.repository.ts
import { IGenericRepository } from '../interfaces/repository.interface';
export class PrismaGenericRepository<T> implements IGenericRepository<T> {
  constructor(private readonly model: any) {}

  async findAll(): Promise<T[]> {
    return this.model.findMany();
  }

  async findById(id: string | number): Promise<T | null> {
    return this.model.findUnique({ where: { id: Number(id) } });
  }

  async create(data: any): Promise<T> {
    return this.model.create({ data });
  }

  async update(id: string | number, data: any): Promise<T> {
    return this.model.update({ where: { id: Number(id) }, data });
  }

  async delete(id: string | number): Promise<boolean> {
    await this.model.delete({ where: { id: Number(id) } });
    return true;
  }
}