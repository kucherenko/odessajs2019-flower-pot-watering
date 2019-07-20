import { Controller } from '@nestjs/common';
import { FlowerPotService } from './flower-pot.service';
import { FlowerPot } from './flower-pot.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: FlowerPot,
  },
})
@Controller('flower-pot')
export class FlowerPotController implements CrudController<FlowerPot> {
  constructor(public service: FlowerPotService) {
  }
}
