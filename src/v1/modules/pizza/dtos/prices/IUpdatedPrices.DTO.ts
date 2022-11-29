import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IPrices } from 'src/v1/modules/pizza/dtos/interface/IPrices.interface';

export class IUpdatedPricesDTO implements IPrices {
  descricao: string;
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '0.00',
    description: 'Price of pizza',
  })
  value: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '0.00',
    description: 'Percentual of disccount of pizza',
  })
  percDiscount: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Lorem Ipsum description',
    description: 'Description to price',
  })
  description: string;
}
