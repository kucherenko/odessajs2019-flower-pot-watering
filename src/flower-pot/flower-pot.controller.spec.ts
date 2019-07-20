import { Test, TestingModule } from '@nestjs/testing';
import { FlowerPotController } from './flower-pot.controller';

describe('FlowerPot Controller', () => {
  let controller: FlowerPotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowerPotController],
    }).compile();

    controller = module.get<FlowerPotController>(FlowerPotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all flowerpots', () => {
    expect(controller.getAll()).toEqual([]);
  });
});
