import { ICreatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/ICreatedPrices.DTO';
import { IUpdatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/IUpdatedPrices.DTO';
import { EntityPrices } from 'src/v1/modules/pizza/typeorm/entities/Prices.entity';

export default interface IRepositoryPrices {
  createPrice(data: ICreatedPricesDTO): Promise<EntityPrices>;
  updatePrice(data: IUpdatedPricesDTO): Promise<EntityPrices>;
  removePrices(description: string): Promise<void>;

  findByAll(): Promise<EntityPrices[]>;
  findByValue(name: string): Promise<EntityPrices>;
  findByPercDiscount(value: number): Promise<EntityPrices>;
}
