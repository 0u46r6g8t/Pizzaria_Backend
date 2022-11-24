import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/ICreatedTypes.DTO';
import { IUpdatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/IUpdatedTypes.DTO';
import IRepositoryTypes from 'src/v1/modules/pizza/repositories/Types.repository';
import EntityTypes from 'src/v1/modules/pizza/typeorm/entities/Types.entity';
import { RepositoryTypes } from 'src/v1/modules/pizza/typeorm/repositories/Types.repository';
import * as typesService from './CRUD/types';

@Injectable()
export class ServiceTypes {
  constructor(
    @InjectRepository(RepositoryTypes)
    private readonly repositoryTypes: IRepositoryTypes,
  ) {}

  public create(data: ICreatedTypesDTO): Promise<EntityTypes> {
    return typesService.create({
      data,
      repository: this.repositoryTypes,
    });
  }

  public update(data: IUpdatedTypesDTO): Promise<EntityTypes> {
    return this.repositoryTypes.updateTypes(data);
  }

  public remove(id: string): Promise<void> {
    return typesService.deleteTypes({
      repository: this.repositoryTypes,
      data: id,
    });
  }

  public findById(id: string): Promise<EntityTypes> {
    return this.repositoryTypes.findById(id);
  }

  public findByName(name: string): Promise<EntityTypes> {
    return this.repositoryTypes.findByName(name);
  }

  public findByAll(): Promise<EntityTypes[]> {
    return this.repositoryTypes.findByAll();
  }
}
