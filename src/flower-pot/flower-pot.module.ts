import { Module } from '@nestjs/common';
import { FlowerPotController } from './flower-pot.controller';
import { FlowerPotService } from './flower-pot.service';
import { FlowerPot } from './flower-pot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowerPotGateway } from './flower-pot.gateway';
import { ScheduleModule } from 'nest-schedule';

@Module({
  imports: [
    ScheduleModule.register(),
    TypeOrmModule.forFeature([FlowerPot]),
  ],
  controllers: [FlowerPotController],
  providers: [FlowerPotService, FlowerPotGateway],
})
export class FlowerPotModule {
}
