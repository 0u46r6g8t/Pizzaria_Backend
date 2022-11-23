import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import { IPrices } from 'src/v1/modules/pizza/dtos/interface/IPrices.interface';
import { Column, Entity } from 'typeorm';

@Entity('tb_pizza')
export class EntityPrices extends BasicEntity implements IPrices {
  constructor(data?: Partial<EntityPrices>) {
    super();
    Object.assign(this, data);
  }

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    example: '0.00',
    description: 'Price of pizza',
  })
  value: string;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: true,
  })
  @ApiProperty({
    example: 'Description of prices',
    description: 'Percentual of disccount of pizza',
  })
  description: string;

  @Column({
    type: 'integer',
    nullable: false,
    unique: false,
  })
  @ApiProperty({
    example: 'Lorem Ipsum description',
    description: 'Description to price',
  })
  percDiscount: number;
}
