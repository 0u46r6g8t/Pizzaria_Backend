import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import { IPizza } from 'src/v1/modules/pizza/dtos/interface/IPizza.interface';
import { Column, Entity } from 'typeorm';

@Entity('tb_pizza')
export class EntityPizza extends BasicEntity implements IPizza {
  constructor(data?: Partial<EntityPizza>) {
    super();
    Object.assign(this, data);
  }

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  @ApiProperty({
    example: 'Pizza calabresa',
    description: 'Pizza of calabresa',
  })
  name: string;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    examples: ['Tomato', 'Molho de tomate'],
    description: 'Ingredients the pizza',
  })
  ingredients: string[];

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    example: 'G',
    description: 'This attribute is size to pizza',
  })
  size: string;

  @Column({
    type: 'integer',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    example: '29,00',
    description: 'Price in real to the pizza',
  })
  price: number;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    example:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    description: 'description in the pizza',
  })
  description: string;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    example: 'assets/images/gg/calabresa',
    description: 'url to image',
  })
  url_image: string;
}
