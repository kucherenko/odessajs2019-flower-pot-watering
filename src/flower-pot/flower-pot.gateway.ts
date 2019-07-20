import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { FlowerPot } from './flower-pot.entity';
import { NestSchedule, Interval } from 'nest-schedule';
import { FlowerPotService } from './flower-pot.service';

@WebSocketGateway()
export class FlowerPotGateway extends NestSchedule {
  @WebSocketServer()
  server: Server;

  constructor(
    private flowerPotService: FlowerPotService,
  ) {
    super();
  }

  @SubscribeMessage('flowers')
  async findAll(): Promise<WsResponse<FlowerPot[]>> {
    const flowers = await this.flowerPotService.findAllFlowers();
    return { event: 'flowers', data: flowers };
  }

  @Interval(10000)
  async checkFlowerWatering() {
    const flowersForWatering = await this.flowerPotService.getFlowersForWatering();
    console.log(flowersForWatering);
    if (flowersForWatering.length > 0) {
      this.server.emit('watering', flowersForWatering);
    }
  }
}
