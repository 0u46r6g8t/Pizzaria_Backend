import { ConflictException } from '@nestjs/common';
import { ICreatedPizzaDTO } from 'src/v1/modules/pizza/dtos/ICreatedPizza.DTO';
import IRepositoryPizza from 'src/v1/modules/pizza/repositories/Pizza.repository';
import { EntityPizza } from 'src/v1/modules/pizza/typeorm/entities/Pizza.entity';

interface IRequest {
  repository: IRepositoryPizza;
  data: ICreatedPizzaDTO;
}

const create = async ({ data, repository }: IRequest): Promise<EntityPizza> => {
  const pizza = repository.findByName(data.name);

  if (pizza) {
    throw new ConflictException([
      `Pizza with name ${data.name} already exists`,
    ]); //validation
  }

  return repository.createPizza(data);
};

export default create;
