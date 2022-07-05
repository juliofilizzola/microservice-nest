import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const player = await this.prismaService.player.findFirst({
      where: {
        email: createPlayerDto.email,
      },
    });

    if (player) {
      throw new BadRequestException('email area exist');
    }
    return this.prismaService.player.create({
      data: createPlayerDto,
    });
  }

  findAll() {
    return `This action returns all player`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
