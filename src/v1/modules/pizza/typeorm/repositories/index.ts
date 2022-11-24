import { RepositoryPizza } from 'src/v1/modules/pizza/typeorm/repositories/Pizza.repository';
import { RepositoryPrices } from 'src/v1/modules/pizza/typeorm/repositories/Prices.repository';
import { RepositoryTypes } from 'src/v1/modules/pizza/typeorm/repositories/Types.repository';

export default [RepositoryPizza, RepositoryTypes, RepositoryPrices];
