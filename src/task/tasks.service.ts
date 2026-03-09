import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import type { IGenericRepository } from '../common/interfaces/repository.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  // Inyectamos la interfaz, no una implementación específica (SQL/NoSQL)
  constructor(
    @Inject('TASKS_REPOSITORY') // Usamos un Token porque la interface no existe en Runtime
    private readonly repository: IGenericRepository<any>) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.repository.create(createTaskDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string | number) {
    const task = await this.repository.findById(id);
    if (!task) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }
    return task;
  }

  async update(id: string | number, updateTaskDto: UpdateTaskDto) {
    // Validamos existencia antes de actualizar
    await this.findOne(id); 
    return await this.repository.update(id, updateTaskDto);
  }

  async remove(id: string | number) {
    await this.findOne(id);
    return await this.repository.delete(id);
  }
}