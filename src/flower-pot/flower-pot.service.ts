import { Injectable } from '@nestjs/common';
import { FlowerPot } from './flower-pot.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import moment = require('moment');

@Injectable()
export class FlowerPotService extends TypeOrmCrudService<FlowerPot> {
  constructor(
    @InjectRepository(FlowerPot)
    private readonly flowerPotRepository: Repository<FlowerPot>,
  ) {
    super(flowerPotRepository);
  }

  findAllFlowers(): Promise<FlowerPot[]> {
    return this.flowerPotRepository.find();
  }

  async getFlowersForWatering(): Promise<FlowerPot[]> {
    const flowers = await this.flowerPotRepository.find();
    return flowers.filter(flower => {
      return moment(flower.lastWatering).add(flower.period, 's').isBefore();
    });
  }

}
