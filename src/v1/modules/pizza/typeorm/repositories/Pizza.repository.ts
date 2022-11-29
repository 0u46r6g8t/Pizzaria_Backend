import { ICreatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/ICreatedPizza.DTO';
import { IUpdatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/IUpdatedPizza.DTO';
import IRepositoryPizza from 'src/v1/modules/pizza/repositories/Pizza.repository';
import { EntityPizza } from 'src/v1/modules/pizza/typeorm/entities/Pizza.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(EntityPizza)
export class RepositoryPizza
  extends Repository<IRepositoryPizza>
  implements IRepositoryPizza
{
  private readonly ormRepository: Repository<EntityPizza>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityPizza);
  }

  public async createPizza(data: ICreatedPizzaDTO): Promise<EntityPizza> {
    const pizza = this.ormRepository.create(data);

    return await this.ormRepository.save(pizza);
  }

  public async updatePizza(data: IUpdatedPizzaDTO): Promise<EntityPizza> {
    throw new Error('Method not implemented.');
  }

  public async removePizza(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByAll(): Promise<EntityPizza[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<EntityPizza> {
    return id ? await this.ormRepository.findOne({ where: { id } }) : undefined;
  }

  public async findByName(name: string): Promise<EntityPizza> {
    return name
      ? await this.ormRepository.findOne({ where: { name } })
      : undefined;
  }

  public async findBySize(size: string): Promise<EntityPizza> {
    return size
      ? await this.ormRepository.findOne({ where: { size } })
      : undefined;
  }
}
