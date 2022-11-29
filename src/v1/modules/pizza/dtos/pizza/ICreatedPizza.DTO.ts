import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { IPizza } from 'src/v1/modules/pizza/dtos/interface/IPizza.interface';

export class ICreatedPizzaDTO implements IPizza {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Pizza vegetarian',
    description: '',
  })
  name: string;

  @IsArray()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    examples: ['Tomato', 'Molho de tomate'],
    description: 'Ingredients the pizza',
  })
  ingredients: string[];

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'G',
    description: 'This attribute is size to pizza',
  })
  size: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: '29,00',
    description: 'Price in real to the pizza',
  })
  price: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    description: 'description in the pizza',
  })
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'assets/images/gg/calabresa',
    description: 'url to image',
  })
  url_image: string;
}
