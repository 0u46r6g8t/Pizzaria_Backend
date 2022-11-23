import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreatedPizzaDTO } from 'src/v1/modules/pizza/dtos/ICreatedPizza.DTO';
import { IUpdatedPizzaDTO } from 'src/v1/modules/pizza/dtos/IUpdatedPizza.DTO';
import IRepositoryPizza from 'src/v1/modules/pizza/repositories/Pizza.repository';
import { EntityPizza } from 'src/v1/modules/pizza/typeorm/entities/Pizza.entity';
import { RepositoryPizza } from 'src/v1/modules/pizza/typeorm/repositories/Pizza.repository';
import * as pizzaService from './CRUD/pizza';

@Injectable()
export class ServicePizza {
  constructor(
    @InjectRepository(RepositoryPizza)
    private readonly repositoryPizza: IRepositoryPizza,
  ) {}

  async createPizza(data: ICreatedPizzaDTO): Promise<EntityPizza> {
    return pizzaService.create({
      data,
      repository: this.repositoryPizza,
    });
  }

  async updatePizza(data: IUpdatedPizzaDTO): Promise<EntityPizza> {
    return this.repositoryPizza.updatePizza(data);
  }

  async removePizza(id: string): Promise<void> {
    return pizzaService.deletePizza({
      data: id,
      repository: this.repositoryPizza,
    });
  }

  async findByName(name: string): Promise<EntityPizza> {
    return this.repositoryPizza.findByName(name);
  }

  async findByAll(): Promise<EntityPizza[]> {
    return this.repositoryPizza.findByAll();
  }

  async findById(id: string): Promise<EntityPizza> {
    return this.repositoryPizza.findById(id);
  }

  async findBySize(size: string): Promise<EntityPizza> {
    return this.repositoryPizza.findBySize(size);
  }
}
