import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/ICreatedPrices.DTO';
import { IUpdatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/IUpdatedPrices.DTO';
import IRepositoryPrices from 'src/v1/modules/pizza/repositories/Prices.repository';
import { EntityPrices } from 'src/v1/modules/pizza/typeorm/entities/Prices.entity';
import { RepositoryPrices } from 'src/v1/modules/pizza/typeorm/repositories/Prices.repository';

@Injectable()
export class ServicePrices {
  constructor(
    @InjectRepository(RepositoryPrices)
    private readonly repositoryPrices: IRepositoryPrices,
  ) {}

  async createPrice(data: ICreatedPricesDTO): Promise<EntityPrices> {
    return this.repositoryPrices.createPrice(data);
  }

  async updatePrice(data: IUpdatedPricesDTO): Promise<EntityPrices> {
    return this.repositoryPrices.updatePrice(data);
  }

  async removePrice(data: string): Promise<void> {
    return this.repositoryPrices.removePrices(data);
  }

  async findByValue(value: string): Promise<EntityPrices> {
    return this.repositoryPrices.findByValue(value);
  }

  async findByPercDiscount(percDiscount: number): Promise<EntityPrices> {
    return this.repositoryPrices.findByPercDiscount(percDiscount);
  }

  async findByAll(): Promise<EntityPrices[]> {
    return this.repositoryPrices.findByAll();
  }
}
