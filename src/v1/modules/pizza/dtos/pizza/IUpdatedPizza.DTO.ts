import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IPizza } from 'src/v1/modules/pizza/dtos/interface/IPizza.interface';
import { ApiProperty } from '@nestjs/swagger';

export class IUpdatedPizzaDTO implements IPizza {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'pizza',
    description: 'Name this pizza',
  })
  ingredients: string[];

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'P',
    description: 'Size of pizza',
  })
  size: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '0,00',
    description: 'Price of Pizza',
  })
  price: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'bacon, frango',
    description: 'ingredients of pizza',
  })
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'url_image',
    description: 'Image of pizza',
  })
  url_image: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'CornBacon',
    description: 'Name of pizza',
  })
  name: string;
}
