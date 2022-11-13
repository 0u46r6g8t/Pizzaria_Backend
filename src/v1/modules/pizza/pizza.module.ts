import { Module } from '@nestjs/common';
import Controllers from 'src/v1/modules/pizza/controller';
import { ServicePizza } from 'src/v1/modules/pizza/services/pizza.service';
import typeorm from 'src/v1/modules/pizza/typeorm';

@Module({
  imports: [typeorm],
  providers: [ServicePizza],
  controllers: [...Controllers],
})
export class ModulePizza {}
