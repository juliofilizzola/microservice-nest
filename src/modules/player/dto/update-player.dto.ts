import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { Exclude } from 'class-transformer';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @Exclude()
  email: string;
}
