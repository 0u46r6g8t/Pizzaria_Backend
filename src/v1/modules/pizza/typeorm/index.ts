import { TypeOrmModule } from '@nestjs/typeorm';
import Repositories from 'src/v1/modules/pizza/typeorm/repositories';
import Entities from './entities';

export default TypeOrmModule.forFeature([...Entities, ...Repositories]);
