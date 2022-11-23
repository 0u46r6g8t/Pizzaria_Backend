import { ApiProperty } from '@nestjs/swagger';
import { BasicEntity } from 'src/v1/modules/BasicEntity';
import { ITypes } from 'src/v1/modules/pizza/dtos/interface/ITypes.interface';
import { Column, Entity } from 'typeorm';

@Entity('tb_types')
export default class EntityTypes extends BasicEntity implements ITypes {
  constructor(data?: Partial<EntityTypes>) {
    super();
    Object.assign(this, data);
  }

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  @ApiProperty({
    example: 'Pizza calabresa',
    description: 'Pizza de calabresa dupla com marquerita é a melhor do mundo',
  })
  name: string;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
    description: 'Description of type pizza',
  })
  description: string;
}
