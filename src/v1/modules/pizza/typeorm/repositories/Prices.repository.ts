import { ICreatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/ICreatedPrices.DTO';
import { IUpdatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/IUpdatedPrices.DTO';
import IRepositoryPrices from 'src/v1/modules/pizza/repositories/Prices.repository';
import { EntityPrices } from 'src/v1/modules/pizza/typeorm/entities/Prices.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(EntityPrices)
export class RepositoryPrices
  extends Repository<IRepositoryPrices>
  implements IRepositoryPrices
{
  private readonly ormRepository: Repository<EntityPrices>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityPrices);
  }

  public async createPrice(data: ICreatedPricesDTO): Promise<EntityPrices> {
    const prices = this.ormRepository.create(data);

    return this.ormRepository.save(prices);
  }

  public async updatePrice(data: IUpdatedPricesDTO): Promise<EntityPrices> {
    throw new Error('Method not implemented.');
  }

  public async removePrices(data: string): Promise<void> {
    await this.ormRepository.delete(data);
  }

  public async findByAll(): Promise<EntityPrices[]> {
    return await this.ormRepository.find();
  }

  public async findByValue(value: string): Promise<EntityPrices> {
    return value
      ? await this.ormRepository.findOne({ where: { value } })
      : undefined;
  }

  public async findByPercDiscount(perDiscount: number): Promise<EntityPrices> {
    return perDiscount
      ? await this.ormRepository.findOne({ where: { perDiscount } })
      : undefined;
  }
}
