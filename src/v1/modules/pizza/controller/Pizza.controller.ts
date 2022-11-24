import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/ICreatedPizza.DTO';
import { IUpdatedPizzaDTO } from 'src/v1/modules/pizza/dtos/pizza/IUpdatedPizza.DTO';
import { ServicePizza } from 'src/v1/modules/pizza/services/pizza.service';
import { EntityPizza } from 'src/v1/modules/pizza/typeorm/entities/Pizza.entity';

@ApiTags('Pizza')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/pizza') // Router for teste
export class ControllerPizza {
  constructor(private readonly servicePizza: ServicePizza) {}

  @ApiOperation({ summary: 'Router for create Pizza' }) // Description in router
  @ApiCreatedResponse({
    // Data send in response to create Pizza
    description: 'Create new Pizza',
    type: EntityPizza,
  })
  @ApiBody({
    type: ICreatedPizzaDTO, // Data send in request
  })
  @UsePipes(new ValidationPipe())
  @Post('/create')
  public createPizza(@Body() data: ICreatedPizzaDTO): Promise<EntityPizza> {
    return this.servicePizza.createPizza(data);
  }

  @ApiOperation({ summary: 'Router for create Pizza' })
  @ApiCreatedResponse({
    description: 'Update Pizza',
    type: EntityPizza,
  })
  @ApiBody({
    type: IUpdatedPizzaDTO,
  })
  @UsePipes(new ValidationPipe())
  @Put('/update')
  public updatePizza(@Body() data: IUpdatedPizzaDTO): Promise<EntityPizza> {
    return this.servicePizza.updatePizza(data);
  }

  @ApiOperation({ summary: 'Router for create Pizza ' })
  @ApiCreatedResponse({
    description: 'Delete Pizza',
    type: EntityPizza,
  })
  @UsePipes(new ValidationPipe()) //pipes of validation
  @Delete('/delete')
  public async removePizza(@Query(':id') id: string): Promise<void> {
    await this.servicePizza.removePizza(id);
  }

  @ApiOperation({ summary: 'Find all Pizzas' })
  @UsePipes(new ValidationPipe())
  @Get('/all')
  public findByAll(): Promise<EntityPizza[]> {
    return this.servicePizza.findByAll();
  }

  @ApiOperation({
    summary: 'Find one Pizza',
  })
  @UsePipes(new ValidationPipe())
  @Get('/name/:name')
  public findByName(@Query('name') name: string): Promise<EntityPizza> {
    return this.servicePizza.findByName(name);
  }

  @ApiOperation({
    summary: 'Find one Pizza by id',
  })
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  public findById(@Query('id') id: string): Promise<EntityPizza> {
    return this.servicePizza.findById(id);
  }

  @ApiOperation({
    summary: 'Find one Pizza by Size',
  })
  @UsePipes(new ValidationPipe())
  @Get('/size/:size')
  public findBySize(@Query('size') size: string): Promise<EntityPizza> {
    return this.servicePizza.findBySize(size);
  }
}
