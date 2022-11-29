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
import { ICreatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/ICreatedTypes.DTO';
import { IUpdatedTypesDTO } from 'src/v1/modules/pizza/dtos/types/IUpdatedTypes.DTO';
import { ServiceTypes } from 'src/v1/modules/pizza/services/types.service';
import EntityTypes from 'src/v1/modules/pizza/typeorm/entities/Types.entity';

@ApiTags('Types')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/types') // Router for teste
export class ControllerTypes {
  constructor(private readonly serviceTypes: ServiceTypes) {}

  @ApiOperation({ summary: 'Router for create Types' }) // Description in router
  @ApiCreatedResponse({
    // Data send in response to create Types
    description: 'Create new Types',
    type: EntityTypes,
  })
  @ApiBody({
    type: ICreatedTypesDTO, // Data send in request
  })
  @UsePipes(new ValidationPipe())
  @Post('/create')
  public createTypes(@Body() data: ICreatedTypesDTO): Promise<EntityTypes> {
    return this.serviceTypes.create(data);
  }

  @ApiOperation({ summary: 'Router for create Types' })
  @ApiCreatedResponse({
    description: 'Update Types',
    type: EntityTypes,
  })
  @ApiBody({
    type: IUpdatedTypesDTO,
  })
  @UsePipes(new ValidationPipe())
  @Put('/update')
  public updateTypes(@Body() data: IUpdatedTypesDTO): Promise<EntityTypes> {
    return this.serviceTypes.update(data);
  }

  @ApiOperation({ summary: 'Router for create Types ' })
  @ApiCreatedResponse({
    description: 'Delete Types',
    type: EntityTypes,
  })
  @UsePipes(new ValidationPipe()) //pipes of validation
  @Delete('/delete')
  public async removeTypes(@Query(':id') id: string): Promise<void> {
    await this.serviceTypes.remove(id);
  }

  @ApiOperation({ summary: 'Find all Typess' })
  @UsePipes(new ValidationPipe())
  @Get('/all')
  public findByAll(): Promise<EntityTypes[]> {
    return this.serviceTypes.findByAll();
  }

  @ApiOperation({
    summary: 'Find one Types',
  })
  @UsePipes(new ValidationPipe())
  @Get('/name/:name')
  public findByName(@Query('name') name: string): Promise<EntityTypes> {
    return this.serviceTypes.findByName(name);
  }

  @ApiOperation({
    summary: 'Find one Types by id',
  })
  @UsePipes(new ValidationPipe())
  @Get('/id/:id')
  public findById(@Query('id') id: string): Promise<EntityTypes> {
    return this.serviceTypes.findById(id);
  }
}
