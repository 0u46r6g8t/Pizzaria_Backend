import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import { ICreatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/ICreatedPrices.DTO';
import { IUpdatedPricesDTO } from 'src/v1/modules/pizza/dtos/prices/IUpdatedPrices.DTO';
import { ServicePrices } from 'src/v1/modules/pizza/services/prices.service';
import { EntityPrices } from 'src/v1/modules/pizza/typeorm/entities/Prices.entity';

@ApiTags('Prices')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/prices') //router for test
export class ControllerPrices {
  constructor(private readonly servicePrice: ServicePrices) {}

  @ApiOperation({ summary: 'Router for create Prices' }) // description in router
  @ApiCreatedResponse({
    //Data send in response to create prices
    description: 'Create new prices',
    type: EntityPrices,
  })
  @ApiBody({
    type: ICreatedPricesDTO, //Data send in request
  })
  @UsePipes(new ValidationPipe())
  @Post('/create')
  public createPrices(@Body() data: ICreatedPricesDTO): Promise<EntityPrices> {
    return this.servicePrice.createPrice(data);
  }

  @ApiOperation({ summary: 'Router for create Prices' }) // description in router
  @ApiCreatedResponse({
    //Data send in response to delete prices
    description: 'Update prices',
    type: EntityPrices,
  })
  @ApiBody({
    type: IUpdatedPricesDTO,
  })
  @UsePipes(new ValidationPipe())
  @Put('/update')
  public updatePrices(@Body() data: IUpdatedPricesDTO): Promise<EntityPrices> {
    return this.servicePrice.updatePrice(data);
  }

  @ApiOperation({ summary: 'Router for delete Prices' })
  @ApiCreatedResponse({
    description: 'Delete prices',
    type: EntityPrices,
  }) // description in router
  @UsePipes(new ValidationPipe()) //Pipes of va lidations
  @Delete('/delete')
  public deletePrices(@Body() data: string): Promise<void> {
    return this.servicePrice.removePrice(data);
  }

  @ApiOperation({ summary: 'Find all prices' })
  @UsePipes(new ValidationPipe())
  @Get('/all')
  public findAllPrices(): Promise<EntityPrices[]> {
    return this.servicePrice.findByAll();
  }

  @ApiOperation({
    summary: 'Find one prices',
  })
  @UsePipes(new ValidationPipe())
  @Get('/value/:value')
  public findOnePrices(@Param('value') value: string): Promise<EntityPrices> {
    return this.servicePrice.findByValue(value);
  }

  @ApiOperation({
    summary: 'Find one Price by Value',
  })
  @UsePipes(new ValidationPipe())
  @Get('/value/:value')
  public findOnePricesById(
    @Param('value') value: string,
  ): Promise<EntityPrices> {
    return this.servicePrice.findByValue(value);
  }

  @ApiOperation({
    summary: 'Find one Price by percDiscount',
  })
  @UsePipes(new ValidationPipe())
  @Get('/percDiscount/:percDiscount')
  public findOnePriceByPercDiscount(
    @Param('percDiscount') percDiscount: number,
  ): Promise<EntityPrices> {
    return this.servicePrice.findByPercDiscount(percDiscount);
  }
}
