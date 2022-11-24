import { BadRequestException } from '@nestjs/common';
import IRepositoryTypes from 'src/v1/modules/pizza/repositories/Types.repository';

interface IRequest {
  data: string;
  repository: IRepositoryTypes;
}

export const deleteTypes = async ({
  data,
  repository,
}: IRequest): Promise<void> => {
  const types = await repository.findById(data);

  if (!types) {
    throw new BadRequestException([`Type with id ${data} not found`]); //validation of service
  }

  await repository.removeTypes(data);
};
