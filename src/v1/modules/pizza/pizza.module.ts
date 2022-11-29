import { Module } from '@nestjs/common';
import Controllers from 'src/v1/modules/pizza/controller';
import Services from 'src/v1/modules/pizza/services';
import typeorm from 'src/v1/modules/pizza/typeorm';

@Module({
  imports: [typeorm],
  providers: [...Services],
  controllers: [...Controllers],
})
export class ModulePizza {}
