import { ICreatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/ICreatedTypes.DTO';
import { IUpdatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/IUpdatedTypes.DTO';
import IRepositoryTypes from 'src/v1/modules/pizza/repositories/Types.repository';
import EntityTypes from 'src/v1/modules/pizza/typeorm/entities/Types.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository()
export default class RepositoryTypes
  extends Repository<IRepositoryTypes>
  implements IRepositoryTypes
{
  private readonly ormRepository: Repository<EntityTypes>;
  constructor() {
    super();
    this.ormRepository = getRepository(EntityTypes);
  }

  public async createTypes(data: ICreatedTypesDTO): Promise<EntityTypes> {
    const types = this.ormRepository.create(data);

    return await this.ormRepository.save(types);
  }

  public async removeTypes(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async updateTypes(data: IUpdatedTypesDTO): Promise<EntityTypes> {
    await this.ormRepository.save(data);

    return await this.findByName(data.name);
  }

  public async findByAll(): Promise<EntityTypes[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<EntityTypes> {
    return id
      ? await this.ormRepository.findOne({
          where: id,
        })
      : undefined;
  }

  public async findByName(name: string): Promise<EntityTypes> {
    return name
      ? await this.ormRepository.findOne({
          where: { name },
        })
      : undefined;
  }
}
