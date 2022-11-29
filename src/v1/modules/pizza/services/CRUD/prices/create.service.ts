import { ICreatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/ICreatedPrices.DTO';
import IRepositoryPrices from 'src/v1/modules/pizza/repositories/Prices.repository';
import { EntityPrices } from 'src/v1/modules/pizza/typeorm/entities/Prices.entity';

interface IRequest {
  repository: IRepositoryPrices;
  data: ICreatedPricesDTO;
}

export const create = async ({
  data,
  repository,
}: IRequest): Promise<EntityPrices> => {
  return await repository.createPrice(data);
};
