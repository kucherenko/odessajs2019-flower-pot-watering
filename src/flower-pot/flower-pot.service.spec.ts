import { Test, TestingModule } from '@nestjs/testing';
import { FlowerPotService } from './flower-pot.service';

describe('FlowerPotService', () => {
  let service: FlowerPotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowerPotService],
    }).compile();

    service = module.get<FlowerPotService>(FlowerPotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
