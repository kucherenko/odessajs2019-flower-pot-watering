import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterFlowerPotDto {

  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  location: string;

  @ApiModelProperty()
  lastWatering?: string;

  @ApiModelProperty()
  period?: number;
}
