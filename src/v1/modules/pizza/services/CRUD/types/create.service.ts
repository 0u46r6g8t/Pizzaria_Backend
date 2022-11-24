import { ConflictException } from '@nestjs/common';
import { ICreatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/ICreatedTypes.DTO';
import IRepositoryTypes from 'src/v1/modules/pizza/repositories/Types.repository';

interface IRequest {
  repository: IRepositoryTypes;
  data: ICreatedTypesDTO;
}

export const create = ({ data, repository }: IRequest) => {
  const findType = repository.findByName(data.name);

  if (findType) {
    throw new ConflictException([
      `Type ${data.name} already exists, please try again`,
    ]);
  }

  return repository.createTypes(data);
};
