import { BadRequestException } from '@nestjs/common';
import IRepositoryPizza from 'src/v1/modules/pizza/repositories/Pizza.repository';

interface IRequest {
  data: string;
  repository: IRepositoryPizza;
}

const deletePizza = async ({ data, repository }: IRequest): Promise<void> => {
  const pizza = await repository.findById(data);

  if (!pizza) {
    throw new BadRequestException([`Pizza with id ${data} not found`]); //validation of service
  }

  repository.removePizza(data);
};

export default deletePizza;
