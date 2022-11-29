import { ICreatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/ICreatedPizza.DTO';
import { IUpdatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/IUpdatedPizza.DTO';
import { EntityPizza } from 'src/v1/modules/pizza/typeorm/entities/Pizza.entity';

export default interface IRepositoryPizza {
  createPizza(data: ICreatedPizzaDTO): Promise<EntityPizza>;
  updatePizza(data: IUpdatedPizzaDTO): Promise<EntityPizza>;
  removePizza(id: string): Promise<void>;

  findByAll(): Promise<EntityPizza[]>;
  findById(id: string): Promise<EntityPizza>;
  findByName(name: string): Promise<EntityPizza>;
  findBySize(size: string): Promise<EntityPizza>;
}
