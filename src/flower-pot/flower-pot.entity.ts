import { Entity } from 'typeorm/decorator/entity/Entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Column } from 'typeorm/decorator/columns/Column';

@Entity()
export class FlowerPot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  location: string;

  @Column('datetime')
  lastWatering: string = new Date().toLocaleString();

  @Column({
    default: 60 * 60 * 24,
  })
  period: number = 60 * 60 * 24;
}
