import { ICreatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/ICreatedTypes.DTO';
import { IUpdatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/IUpdatedTypes.DTO';
import EntityTypes from 'src/v1/modules/pizza/typeorm/entities/Types.entity';

export default interface IRepositoryTypes {
  createTypes(data: ICreatedTypesDTO): Promise<EntityTypes>;
  removeTypes(id: string): Promise<void>;
  updateTypes(data: IUpdatedTypesDTO): Promise<EntityTypes>;

  findByAll(): Promise<EntityTypes[]>;
  findById(id: string): Promise<EntityTypes>;
  findByName(name: string): Promise<EntityTypes>;
}
