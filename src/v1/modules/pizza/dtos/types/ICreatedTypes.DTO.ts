import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ITypes } from 'src/v1/modules/pizza/dtos/interface/ITypes.interface';

export class ICreatedTypesDTO implements ITypes {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({
    example: 'G',
    description: 'Type of pizza',
  })
  name: string;

  @IsString()
  @IsDefined()
  @ApiProperty({
    example: 'Lorem ipsum pizza G',
    description: 'Description of types to pizza',
  })
  description: string;
}
